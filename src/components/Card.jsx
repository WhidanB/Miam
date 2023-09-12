import React from 'react';

const Card = ({meal}) => {
    return (
        <a href="/recette" meal={meal} className="meal-card">
            <img src={meal.strMealThumb} alt={"photo de" + meal.strMeal}  />
            <h2>{meal.strMeal}</h2>
            
        </a>
    );
};

export default Card;