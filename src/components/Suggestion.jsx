import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MiniCard from './MiniCard';
import id from "../pages/Recipee"

const Suggestion = (meal) => {
// console.log(meal.data.meal.strArea)
    const country = meal.data.meal.strArea;
    const category = meal.data.meal.strCategory;
    const [dataC, setDataC] = useState([]);
    const [dataA, setDataA] = useState([]);

    
    const getRandomIndex = (data) => {
        return Math.floor(Math.random() * data.length);
      };

    const randomIndexC = getRandomIndex(dataC);
    const randomIndexA = getRandomIndex(dataA);


    useEffect(() => {
    
    axios
    .get("https://www.themealdb.com/api/json/v1/1/filter.php?a="+country)
    .then((res)=> setDataC(res.data.meals))

    axios
    .get("https://www.themealdb.com/api/json/v1/1/filter.php?c="+category)
    .then((resp)=> setDataA(resp.data.meals))
}, [])

    return (
        <div className='suggestions'>
            <h2>Suggestions</h2>

            <div>
                <h3>More {country} Food</h3>
                <ul className='suggestions_container'>

                {dataC
                .slice(randomIndexC, randomIndexC + 3)
                .map((meals, index)=>(
                    <MiniCard key={index} meal={meals}/> ))}
                </ul>
            </div>
            <div>
                <h3>More from the "{category}" category </h3>
                <ul className='suggestions_container'>
                {dataA
                .slice(randomIndexA, randomIndexA + 3)
                .map((meals, index)=>(
                    <MiniCard key={index} meal={meals} />  ))}

                </ul>
            </div>
            
        </div>
    );
};

export default Suggestion;