import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Desc from '../components/Desc';
import Suggestion from '../components/Suggestion';
import Plats from '../components/Plats';

const Random = ({}) => {
    const [data, setData] = useState([]);
    const [randomData, setRandomData] = useState([]);
    const [searchValue, setSearchValue] = useState();

    const fetchData = (()=>{
        searchValue != undefined ?
        axios
          .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
          .then((res) => setData(res.data.meals))
        :
        axios
        .get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((res) => setRandomData(res.data.meals));
        

        
        
    })

useEffect(() => {

    fetchData();
    
      
  }, [searchValue]);

  
    return (


        <div className='Recipee'>
            <Header setSearchValue={setSearchValue}/>
            {
                searchValue != undefined ?
                    data?
                    <Plats meals={data} />
                    :
                    <div className='Result'>

                    <h2 className='NoMeal'>No meal found</h2>
                    </div>
                :
            
            randomData
            .map((meal, index)=>(
            <Desc key={index} meal={meal}/> ))
            }

            
        </div>
    );
};

export default Random;