import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Plats from "../components/Plats";
import axios from "axios";


const Home = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState();
  
  useEffect(() => {
    searchValue ? 
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
        .then((res) => setData(res.data.meals))
        
    :
      axios
        .get("https://www.themealdb.com/api/json/v1/1/search.php?f=h")
        .then((res) => setData(res.data.meals))
    
        console.log(searchValue)
  }, [searchValue]);
  return (
    <div className="Home">
      <Header setSearchValue={setSearchValue}/>
      {data ?
      <Plats meals={data} />:
      <h2>No meal found</h2>
      }
    </div>
  );
};

export default Home;
