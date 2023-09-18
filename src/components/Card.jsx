import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({meal}) => {
    
    return (
        <NavLink to={`/recette/${meal.idMeal}`} meal={meal} className="meal-card">
            <img src={meal.strMealThumb} alt={"photo de" + meal.strMeal}  />
            <h2>{meal.strMeal}</h2>
            
        </NavLink>
    );
};

export default Card;