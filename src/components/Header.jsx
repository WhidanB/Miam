import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Header = ({setSearchValue}) => {
    const [value, setValue] = useState('');
    const handleInputChange = (e) => {
        let newValue = undefined;
        e.target.value == '' ?
         newValue = undefined
        :
         newValue = e.target.value;
      setValue(newValue);
      setSearchValue(newValue); // Appelez la fonction de mise à jour de l'état du composant parent
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