import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Desc from '../components/Desc';
import Suggestion from '../components/Suggestion';

const Recipee = ({}) => {
    const [data, setData] = useState([]);
    const id = useParams();

    const fetchData = (()=>{
        axios
        .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=`+id.id)
        .then((res) => setData(res.data.meals));
        
        
    })

useEffect(() => {

    fetchData();
    
      
  }, [id.id]);

  
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

export default Recipee;