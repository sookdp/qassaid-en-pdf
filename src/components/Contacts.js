import React from 'react';

const Contacts = () => {
    return (
        <div>
            <div className="m-4 p-11 mx-auto max-w-xl bg-white bg-opacity-5 backdrop-blur-md border border-white"
                 style={{borderRadius: '2%'}}>
                <h1 className="text-3xl text-gray-50 font-extrabold text-center">Nous contacter</h1>
                <p className="lg:auto mx-auto leading-relaxed text-base text-center text-gray-500">N'hésitez pas à nous soumettre des suggestions
                    de modifications ou bien nous envoyer des fichiers à ajouter.</p>
                <form action="https://formspree.io/f/myzgjbzl" method="POST" className="mt-8 space-y-4">
                    <input name="name" type='text' placeholder='Nom et Prénom(ex: John Doe)'
                           className="w-full rounded-md py-3 px-4 text-gray-100 bg-gray-700 focus:bg-transparent text-sm outline-blue-500"/>
                    <input name="email" type='email' placeholder='E-mail(ex: exemple@email.com)'
                           className="w-full rounded-md py-3 px-4 text-gray-100 bg-gray-700 focus:bg-transparent text-sm outline-blue-500"/>
                    <input name="subject" type='text' placeholder='Sujet(ex: Ajout de fichiers)'
                           className="w-full rounded-md py-3 px-4 text-gray-100 bg-gray-700 focus:bg-transparent text-sm outline-blue-500"/>
                    <textarea name="message" placeholder='Message' rows="6"
                              className="w-full rounded-md px-4 text-gray-100 bg-gray-700 focus:bg-transparent text-sm pt-3 outline-blue-500"></textarea>
                    <button type='submit'
                            className="text-black bg-white hover:bg-gray-300 tracking-wide rounded-md text-sm px-4 py-3 w-full">Envoyer
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;
