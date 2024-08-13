import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bookLogo from '../assets/img/book-logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="overflow-x-hidden">
            <header className="bg-transparent text-xl text-white m-0 p-0">
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center">
                        <img src={bookLogo} alt="Logo" className="h-10 w-10 mr-2" />
                    </div>
                    <button
                        className="block sm:hidden text-white focus:outline-none transition duration-300"
                        onClick={toggleMenu}
                    >
                        <svg
                            className={`h-10 w-10 fill-current transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.70711 5.29289C7.09763 4.90237 7.7308 4.90237 8.12132 5.29289L12 9.17157L15.8787 5.29289C16.2692 4.90237 16.9024 4.90237 17.2929 5.29289C17.6834 5.68342 17.6834 6.31658 17.2929 6.70711L13.4142 10.5858L17.2929 14.4645C17.6834 14.855 17.6834 15.4882 17.2929 15.8787C16.9024 16.2692 16.2692 16.2692 15.8787 15.8787L12 11.9999L8.12132 15.8787C7.7308 16.2692 7.09763 16.2692 6.70711 15.8787C6.31658 15.4882 6.31658 14.855 6.70711 14.4645L10.5858 10.5858L6.70711 6.70711C6.31658 6.31658 6.31658 5.68342 6.70711 5.29289Z"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2z"
                                />
                            )}
                        </svg>
                    </button>
                    <nav className="hidden sm:flex flex-grow items-center justify-end space-x-8">
                        <Link to="/" className="py-2 rounded-2xl bg-white text-black px-4 hover:bg-stone-300">Accueil</Link>
                        <Link to="/coran" className="py-2 text-stone-300 hover:text-stone-50">Coran</Link>
                        <Link to="/livres" className="py-2 text-stone-300 hover:text-stone-50">Livres en français</Link>
                        <Link to="/qassaid" className="py-2 text-stone-300 hover:text-stone-50">Qassaïd</Link>
                        <Link to="/contacts" className="py-2 text-stone-300 hover:text-stone-50">Contacts</Link>
                    </nav>
                </div>
                <nav
                    className={`fixed top-0 right-0 h-full w-2/3 bg-black p-3 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <button
                        className="absolute top-4 right-4 text-white focus:outline-none transition duration-300"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="h-10 w-10 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.70711 5.29289C7.09763 4.90237 7.7308 4.90237 8.12132 5.29289L12 9.17157L15.8787 5.29289C16.2692 4.90237 16.9024 4.90237 17.2929 5.29289C17.6834 5.68342 17.6834 6.31658 17.2929 6.70711L13.4142 10.5858L17.2929 14.4645C17.6834 14.855 17.6834 15.4882 17.2929 15.8787C16.9024 16.2692 16.2692 16.2692 15.8787 15.8787L12 11.9999L8.12132 15.8787C7.7308 16.2692 7.09763 16.2692 6.70711 15.8787C6.31658 15.4882 6.31658 14.855 6.70711 14.4645L10.5858 10.5858L6.70711 6.70711C6.31658 6.31658 6.31658 5.68342 6.70711 5.29289Z"
                            />
                        </svg>
                    </button>
                    <ul className="flex flex-col space-y-2 justify-center items-center mt-10">
                        <li>
                            <Link
                                to="/"
                                className={`block py-2 text-center px-4 hover:bg-stone-300 ${isOpen ? 'bg-white rounded-2xl text-stone-950' : 'bg-transparent'}`}
                                style={{ maxWidth: '15vh', alignItems: "center" }}
                                onClick={toggleMenu}
                            >
                                Accueil
                            </Link>
                        </li>
                        <li>
                            <Link to="/coran" className="block py-2 text-center text-stone-300 hover:text-stone-50" onClick={toggleMenu}>Coran</Link>
                        </li>
                        <li>
                            <Link to="/livres" className="block py-2 text-center text-stone-300 hover:text-stone-50" onClick={toggleMenu}>Livres en français</Link>
                        </li>
                        <li>
                            <Link to="/qassaid" className="block py-2 text-center text-stone-300 hover:text-stone-50" onClick={toggleMenu}>Qassaïd</Link>
                        </li>
                        <li>
                            <Link to="/contacts" className="block py-2 text-center text-stone-300 hover:text-stone-50" onClick={toggleMenu}>Contacts</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
