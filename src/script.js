const fs = require('fs');
const { google } = require('googleapis');

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

// Authentification avec OAuth2
const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
    version: 'v3',
    auth: oauth2Client,
});

// ID des dossiers Google Drive
const folders = {
    Coran: '1mGvSZu45--TgdVbZeNI-2rZs450uPXUD',
    Livres: '18n15v5vS_Q_N7oIj1YXRrS8XVXxlz9Df',
    Qassaid: 'QASSAID_FOLDER_ID',
};

async function listFiles(folderId) {
    let files = [];
    let pageToken = null;

    do {
        const response = await drive.files.list({
            q: `'${folderId}' in parents`,
            fields: 'nextPageToken, files(id, name, webViewLink)',
            spaces: 'drive',
            pageToken: pageToken,
        });

        files = files.concat(response.data.files);
        pageToken = response.data.nextPageToken;
    } while (pageToken);

    return files.map(file => ({
        name: file.name,
        url: file.webViewLink,
    }));
}

async function fetchAllFiles() {
    try {
        for (const [key, folderId] of Object.entries(folders)) {
            const files = await listFiles(folderId);
            const jsonData = JSON.stringify(files, null, 2);
            fs.writeFileSync(`${key}Data.json`, jsonData);
            console.log(`Les données des fichiers ont été enregistrées dans ${key}Data.json`);
        }

        console.log('Terminé : récupération des fichiers et enregistrement des données.');
    } catch (err) {
        console.error('Erreur lors de la récupération des fichiers :', err);
    }
}

fetchAllFiles().catch(err => {
    console.error('Erreur lors de la récupération des fichiers :', err);
});
