import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import Search from "../components/Search";
import axios from 'axios';

const Recipee = ({meal}) => {
    const [data, setData] = useState([]);

useEffect(() => {
    
    axios
      .get("www.themealdb.com/api/json/v1/1/lookup.php?i="+meal.idMeal)
      .then((res) => setData(res.data.meals));
  });

    return (


        <div>
            <Header/>
            <Search/>

            
        </div>
    );
};

export default Recipee;