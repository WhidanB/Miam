import React, { useState } from 'react';

const Search = ({ setSearchValue }) => {
    const [value, setValue] = useState('');
  
    const handleInputChange = (e) => {
      const newValue = e.target.value;
      setValue(newValue);
      setSearchValue(newValue); // Appelez la fonction de mise à jour de l'état du composant parent
    };

    return (
        <input type="text"
        placeholder="Search"
        className="Search"
        value={value}
        onChange={handleInputChange}/>
    );
};

export default Search;