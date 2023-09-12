import React from 'react';

const Card = ({meal}) => {
    return (
        <a href='/recette' className="meal-card">
            <h2>{meal.strMeal}</h2>
            <p>Origin: {meal.strArea}</p>
            <img src={meal.strMealThumb} alt={"photo de" + meal.strMeal}  />
            
        </a>
    );
};

export default Card;