import React, { useEffect, useState } from 'react';
import CateCard from './CateCard';

const CategoriesSub = (cate) => {
    const [dataCate, setDataCate] = useState([]);

    useEffect(()=>{
setDataCate(cate.cate)
    })

    return (
        <div className='plat-container'>
            <h2>Categories</h2>
            <ul>
            {dataCate.map((categorie, index)=>(
                <CateCard key={index} categorie={categorie}/>
            ))}
            </ul>
        </div>
    );
};

export default CategoriesSub;