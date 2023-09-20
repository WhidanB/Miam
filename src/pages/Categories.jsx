import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

import axios from 'axios';
import Card from '../components/Card';
import CateCard from '../components/CateCard';
import CategoriesSub from '../components/CategoriesSub';
import Plats from '../components/Plats';

const Categories = () => {

    const [dataCate, setDataCate] = useState([]);
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState();

    useEffect(() => {
      searchValue != undefined ? 
        axios
          .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
          .then((res) => setData(res.data.meals))
          
      :
      axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res )=> setDataCate(res.data.categories));
          
          
          
          
          
          
        }, [searchValue]);


    return (
        <div className='Home'>
            <Header setSearchValue={setSearchValue}/>


            {searchValue != undefined ?
              data?
              <Plats meals={data} />
              :
              <div className='Result'>

              <h2 className='NoMeal'>No meal found</h2>
              </div>
            :
            <CategoriesSub cate={dataCate}/>
        }
        </div>
    );
};

export default Categories;