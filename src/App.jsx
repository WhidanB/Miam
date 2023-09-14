import react, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipee from "./pages/Recipee";
import axios from "axios";

const instance = axios.create(
  {
          baseURL: "http://localhost:3000/",
          withCredentials: true,
          headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
        }
    })

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?f=c", instance)
      .then((res) => setData(res.data.meals))
      .catch(
        function (error) {
          console.log('Show error notification!')
          return Promise.reject(error)
        }
      )
  }, []);
  
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home meals={data} />}></Route>
        <Route path="/recette/:id" element={<Recipee />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
