import React, { useState, useEffect } from 'react';
import placeholderImage from '../assets/img/file.png';
import SearchBar from './SearchBar';

const Livres = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [files, setFiles] = useState([]);

    useEffect(() => {
        fetch('/LivresData.json')
            .then(response => response.json())
            .then(data => setFiles(data))
            .catch(error => console.error('Erreur de récupération des fichiers:', error));
    }, []);

    const filteredFiles = files.filter(file =>
        file.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="mt-4 sm:mt-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-200 px-6">Fichiers PDF pour les <span className="text-transparent bg-clip-text bg-gradient-to-r to-gray-600 from-gray-300">Livres</span></h2>
            <div className="flex justify-center items-center max-w-xl px-6 py-2">
                <SearchBar onSearch={setSearchTerm}/>
            </div>
            <p className="mb-2 px-6 text-gray-300">Cliquez sur un fichier pour le visualiser</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredFiles.map((file, index) => (
                    <div key={index} className="flex items-center bg-transparent p-4">
                        <img src={placeholderImage} alt="Thumbnail" className="w-8 h-8 mr-4"/>
                        <a href={file.url} target="_blank" rel="noopener noreferrer"
                           className="text-stone-50 hover:underline">
                            {file.name}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Livres;
