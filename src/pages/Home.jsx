import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Plats from "../components/Plats";
import axios from "axios";
import value from "../components/Search"

const Home = () => {
console.log(value)
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('h');
  useEffect(() => {
    searchValue ? 
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
        .then((res) => setData(res.data.meals))
        .catch(
          function (error) {
            console.log('Show error notification!')
            return Promise.reject(error)
          }
        )
    :
      axios
        .get("https://www.themealdb.com/api/json/v1/1/search.php?f=h")
        .then((res) => setData(res.data.meals))
        .catch(
          function (error) {
            console.log('Show error notification!')
            return Promise.reject(error)
          }
        )
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
