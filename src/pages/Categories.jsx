import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import axios from 'axios';
import Card from '../components/Card';
import CateCard from '../components/CateCard';
import CategoriesSub from '../components/CategoriesSub';

const Categories = () => {

    const [dataCate, setDataCate] = useState([]);

    useEffect(() =>{
    
        axios
        .get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((res )=> setDataCate(res.data.categories));
    
    }, [])

    return (
        <div className='Home'>
            <Header/>
            <CategoriesSub cate={dataCate}/>
        </div>
    );
};

export default Categories;