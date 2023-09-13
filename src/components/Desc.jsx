import React from 'react';

const Desc = (meal) => {
    console.log(meal)
    return (
        <div className='Recipee'>
            <h1>{meal.meal.strMeal}</h1>
        </div>
    );
};

export default Desc;