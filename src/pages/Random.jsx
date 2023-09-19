import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Desc from '../components/Desc';
import Suggestion from '../components/Suggestion';

const Random = ({}) => {
    const [data, setData] = useState([]);
    const id = useParams();

    const fetchData = (()=>{
        axios
        .get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((res) => setData(res.data.meals));
        
        
    })

useEffect(() => {

    fetchData();
    
      
  }, []);

  
    return (


        <div className='Recipee'>
            <Header/>
            {data
            .map((meal, index)=>(
            <Desc key={index} meal={meal}/> ))
            }

            
        </div>
    );
};

export default Random;