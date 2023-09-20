import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import Header from '../components/Header';
import Plats from '../components/Plats';

const Category = () => {

    const [dataCat, setDataCat] = useState([]);
    const categorie = useParams();
    

    useEffect(() =>{

        axios
        .get("https://www.themealdb.com/api/json/v1/1/filter.php?c="+categorie.id)
        .then((res) => setDataCat(res.data.meals));


    }, [])



    return (
        <div className='Home'>
            <Header/>
            <div className='plat-container'>
            <h2>{categorie.id}</h2>
            <Plats meals={dataCat}/>
            </div>
            
        </div>
    );
};

export default Category;