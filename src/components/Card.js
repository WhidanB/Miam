import React from 'react';

const Card = ({meal}) => {
    return (
        <div className="meal-card">
            <h3>{meal.strMeal}</h3>
            <p>Origin:{meal.strArea}</p>
            <img src={meal.strMealThumb} alt={"photo de" + meal.strMeal}  />
            
        </div>
    );
};

export default Card;