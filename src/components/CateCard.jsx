import React from 'react';
import { NavLink } from 'react-router-dom';

const CateCard = ({categorie}) => {
    
    return (
        <NavLink to={`/category/${categorie.strCategory}`} category={categorie} className="meal-card">
            <img src={categorie.strCategoryThumb} alt={"photo de" + categorie.strCategory}  />
            <h2>{categorie.strCategory}</h2>
            
        </NavLink>
    );
};

export default CateCard;