import React from 'react';

const SearchBar = ({ onSearch }) => {
    const handleInputChange = (event) => {
        const searchTerm = event.target.value;
        onSearch(searchTerm);
    };

    return (
        <input
            type="text"
            placeholder="Rechercher..."
            className="border border-gray-800 rounded-3xl px-3 py-2 w-full text-gray-100 bg-gray-700"
            onChange={handleInputChange}
        />
    );
};

export default SearchBar;
