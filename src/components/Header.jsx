import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
        <NavLink to='/'>🥗 Miam Miam 🥩</NavLink>
        </div>
    );
};

export default Header;