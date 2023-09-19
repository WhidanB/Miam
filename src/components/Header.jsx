import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';

const Header = () => {



    return (
        <div className='header'>
        <NavLink to='/'>🥗 Miam Miam 🥩</NavLink>
        <Search />
        <ul>
            <NavLink to='/categories'>Categories</NavLink>
            <NavLink to='/alphabet'>Browse by name</NavLink>
        </ul>
        </div>
    );
};

export default Header;