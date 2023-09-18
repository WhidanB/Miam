import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Suggestion from './Suggestion';

const Desc = (meal) => {
    const YTube = meal.meal.strYoutube.replace("watch?v=", "embed/");
    
    let Ingredient = [];
            let i = 1;
            while (true && i <= 20) {
                let ing = meal.meal[`strIngredient${i}`];
                if (typeof ing == "string" && ing.length > 0) {
                    const tempIng = [];
                    tempIng.push(meal.meal[`strMeasure${i}`])
                    tempIng.push(meal.meal[`strIngredient${i}`])
                    Ingredient.push(tempIng)
                }
                i++;

            }
    return (
        <div className='Recipee-container'>
            <div className='meal-wrapper'>

                <div className='meal-container'>
                    <img src={meal.meal.strMealThumb} alt="" />
                    <div className='info'>
                        <div>
                            <h1>{meal.meal.strMeal}</h1>
                            <p>{meal.meal.strArea}</p>
                        </div>
                        <iframe width="480" className='max-w-full' height="270" src={YTube} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>                </div>
                </div>
                    <div className='ing'>
                        <h2>Ingredients</h2>
                        <div className='ing-container'>

                        {Ingredient.map((ingredient, index) => {
                            const imgName = ingredient[1].replace(' ', "%20")
                            const imgURL = `https://www.themealdb.com/images/ingredients/${imgName}.png`
                            return <Fragment key={`ing${index}`}>
                    
                            <div className='ingredients-container'>
                            
                                <img alt={ingredient[1]} src={imgURL} className='ingimg'/>
                                <div >
                                    <h3>{ingredient[0]}</h3>
                                    <h2>{ingredient[1]}</h2>
                                </div>
                            </div>
                            </Fragment>
                                        })}
                        </div>
            
                    </div>

            
                <div className='ins'>
                    <h2>Instructions</h2>
                    <p>{meal.meal.strInstructions}</p>
                </div>
                
                <p>Source: {meal.meal.strSource}</p>
            <Suggestion data={meal} />
            </div>
        </div>
    );
};

export default Desc;