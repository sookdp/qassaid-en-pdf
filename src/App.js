import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import Accueil from './components/Accueil.js';
import Coran from './components/Coran.js';
import Livres from './components/Livres.js';
import Qassaid from './components/Qassaid.js';
import Contacts from './components/Contacts.js';
import Footer from "./components/Footer.js";

const App = () => {
  return (
      <>
        <div className="flex flex-col min-h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black text-white">
          <Router>
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/coran" element={<Coran />} />
                <Route path="/livres" element={<Livres />} />
                <Route path="/qassaid" element={<Qassaid />} />
                <Route path="/contacts" element={<Contacts />} />
              </Routes>
            </main>
            <Footer />
          </Router>
        </div>
      </>
  );
};

export default App;
