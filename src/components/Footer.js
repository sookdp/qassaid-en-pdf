import React from 'react';
import footerLogo from '../assets/img/book-logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="shadow bg-gray-900 mt-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={footerLogo} className="h-8" alt="Qassaïd PDF Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Qassaïd en PDF</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
                        <li>
                            <a href="/" className="hover:underline me-4 md:me-6">Accueil</a>
                        </li>
                        <li>
                            <a href="/coran" className="hover:underline me-4 md:me-6">Coran</a>
                        </li>
                        <li>
                            <a href="/livres" className="hover:underline me-4 md:me-6">Livres en Français</a>
                        </li>
                        <li>
                            <a href="/qassaid" className="hover:underline">Contacts</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
                <span className="block text-sm sm:text-center text-gray-400">©{currentYear} <a href="/" className="hover:underline">Qassaïd en PDF</a>. Tous Droits Réservés.</span>
            </div>
        </footer>
    );
};

export default Footer;
