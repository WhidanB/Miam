import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Plats from '../components/Plats';
import axios from 'axios';


const Alphabet = () => {

    const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    const [letter, setLetter] = useState([]);
    const [data, setData] = useState([]);


    useEffect(()=>{
        letter.length?
        axios
        .get("https://www.themealdb.com/api/json/v1/1/search.php?f="+letter)
        .then((res)=> setData(res.data.meals))
        :
        axios
        .get("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
        .then((res)=> setData(res.data.meals));

    }, [letter])

    return (
        <div className='Home'>
            <Header />
            <ul>
                {
                    alpha.map((e)=>(
                        <span onClick={()=>setLetter(e[0])}>{e[0]}</span>
                        ))
                    }
            </ul>
            {letter.length?<h2>Meals starting with letter {letter} </h2>:<h2>Meals starting with letter A </h2>}
            {
                
                data ?<Plats meals={data}/>:<h2>No meal found</h2>
            }
            
        </div>
    );
};

export default Alphabet;