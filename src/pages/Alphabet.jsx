import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Plats from '../components/Plats';
import axios from 'axios';


const Alphabet = () => {

    const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    const [letter, setLetter] = useState([]);
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState();


    useEffect(()=>{
        if(searchValue === undefined){
            if(letter.length){
                axios
        .get("https://www.themealdb.com/api/json/v1/1/search.php?f="+letter)
        .then((res)=> setData(res.data.meals))
            }else{
                axios
        .get("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
        .then((res)=> setData(res.data.meals));
            }
        }else{
            axios
          .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
          .then((res) => setData(res.data.meals))
        }
        
        
        
        

    }, [searchValue, letter])

    return (
        <div>
            <Header setSearchValue={setSearchValue}/>

            {
                searchValue != undefined?
                    data?
                    <Plats meals={data} />
                    :
                    <div className='Result'>
                    <h2 className='NoMeal'>No meal found</h2>
                    </div>
                :
                <div className='Alphabet'>
                    <ul className='Lettres'>
                    {
                        alpha.map((e)=>(
                            <span onClick={()=>setLetter(e[0])}>{e[0]}</span>
                            ))
                        }
                    </ul>
                
                    <div className='Result'>

                    {letter.length?<h2 className='NoMeal'>Meals starting with letter {letter} </h2>:<h2 className='NoMeal'>Meals starting with letter A </h2>}
                    {
                        
                        data ?
                        <Plats meals={data}/>
                        :
                        <h2 className='NoMeal'>No meal found</h2>
                    }
                    </div>
            
                </div>
            };
        </div>
    );
};

export default Alphabet;