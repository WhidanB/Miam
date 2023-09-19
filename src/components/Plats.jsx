import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";



const Plats = (meals) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    
    setData(meals.meals);

  
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
