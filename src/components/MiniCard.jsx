import React from 'react';
import { NavLink } from 'react-router-dom';

const MiniCard = ({meal}) => {
    
const click = ()=>{
    window.scrollTo({top: 0, behavior: 'smooth'});
    // window.location.reload(true);
}

    return (
        <NavLink to={`/recette/${meal.idMeal}`} meal={meal} className="meal-minicard" onClick={click}>
            <img src={meal.strMealThumb} alt={"photo de" + meal.strMeal}  />
            <h2>{meal.strMeal}</h2>
            
        </NavLink>
    );
};

export default MiniCard;