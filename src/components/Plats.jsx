import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";



const Plats = (meals) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    
    setData(meals.meals.meals);
  //   axios
  //     .get("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken", instance)
  //     .then((res) => setData(res.data.meals))
  //     .catch(
  //       function (error) {
  //         console.log('Show error notification!')
  //         return Promise.reject(error)
  //       }
  //     )
  
  });

  return (
    <div className="plat-container">
 <ul>
        {data
        .map((meal, index) => (
        <Card key={index} meal={meal}/> ))}
      </ul>
    </div>
  );
};

export default Plats;
