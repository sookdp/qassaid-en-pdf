import React from 'react';
import quranImage from '../assets/img/quran-img.jpeg';

const Accueil = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row justify-center items-center text-white mx-4 space-y-8 md:space-y-0 md:space-x-20">
            <div className="text-center my-4 flex flex-col justify-center md:w-1/2">
                <h1 className="text-5xl font-bold text-gray-200">As salaamu Aleykum</h1>
                <h3 className="text-3xl font-bold py-5 text-gray-500">Bienvenue sur le site Qassaïd en PDF</h3>
                <p className="text-lg text-justify mt-4 mb-3 px-4">
                    Ce site est dédié à la diffusion du savoir et de la culture islamique. Ici, vous trouverez une vaste collection de
                    <span className="underline dark:text-white decoration-gray-50 hover:text-black hover:bg-white hover:ease-out hover:duration-300">
                        plus de 1000 fichiers PDF
                    </span>, comprenant le
                    <span className="font-bold">Coran</span>, des
                    <span className="font-bold">livres en français</span>, ainsi que des
                    <span className="font-bold">Qassaïd</span>. Que vous soyez à la recherche de textes sacrés, d'ouvrages pour approfondir vos connaissances ou de poésie spirituelle, notre bibliothèque numérique est à votre disposition pour enrichir votre quête intellectuelle et spirituelle. Explorez, téléchargez et laissez-vous inspirer par la richesse de notre patrimoine culturel.
                </p>
                <div className="mt-3 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-full">
                    <a href="/src/components/Qassaid" className="bg-white text-black px-6 py-auto rounded-xl w-64 h-12 md:mr-4 transition-all duration-300 hover:scale-110 flex items-center justify-center">
                        Découvrir les qassaïd
                    </a>
                    <a href="/src/components/Livres" className="bg-white text-black px-6 py-auto rounded-xl w-64 h-12 transition-all duration-300 hover:scale-110 flex items-center justify-center">
                        Découvrir les textes en français
                    </a>
                </div>
            </div>
            <div className="flex justify-center bg-transparent h-96 w-80 md:w-1/3 mt-8 md:mt-0">
                <img
                    src={quranImage}
                    alt="Coran"
                    className="h-96 w-80 md:h-auto md:w-full max-w-full object-cover rounded-full"
                />
            </div>
        </div>
    );
};

export default Accueil;
