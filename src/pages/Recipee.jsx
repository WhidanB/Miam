import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import Search from "../components/Search";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Desc from '../components/Desc';

const Recipee = ({}) => {
    const [data, setData] = useState([]);
    const id = useParams();

    

useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=`+id.id)
      .then((res) => setData(res.data.meals));
      
  }, []);

  
    return (


        <div className='Recipee'>
            <Header/>
            <Search/>
            {data
            .map((meal, index)=>(
            <Desc key={index} meal={meal}/> ))}

            
        </div>
    );
};

export default Recipee;