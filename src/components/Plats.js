import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Plats = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      .then((res) => setData(res.data.meals));
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
