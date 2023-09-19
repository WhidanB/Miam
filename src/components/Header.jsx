import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';

const Header = ({setSearchValue}) => {
    const [value, setValue] = useState('');
  console.log(value);
    const handleInputChange = (e) => {
      const newValue = e.target.value;
      setValue(newValue);
      setSearchValue(value); // Appelez la fonction de mise à jour de l'état du composant parent
    };


    return (
        <div className='header'>
        <NavLink to='/'>🥗 Miam Miam 🥩</NavLink>
        <input type="text"
        placeholder="Search"
        className="Search"
        onChange={handleInputChange}/>
        <ul>
            <NavLink to='/categories'>Categories</NavLink>
            <NavLink to='/alphabet'>Browse by name</NavLink>
            <NavLink to='/random'>Random meal</NavLink>
        </ul>
        </div>
    );
};

export default Header;