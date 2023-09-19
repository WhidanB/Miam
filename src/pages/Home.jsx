import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Plats from "../components/Plats";
import axios from "axios";

const Home = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?f=c")
      .then((res) => setData(res.data.meals))
      .catch(
        function (error) {
          console.log('Show error notification!')
          return Promise.reject(error)
        }
      )
  }, []);
  return (
    <div className="Home">
      <Header />
      <Plats meals={data} />
    </div>
  );
};

export default Home;
