/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Products from '../../components/Products/Products';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const [loaddata, setLoadData] = useState([]);
    const data = useLoaderData();
    useEffect(() => {
        setLoadData(data.data)
    }, [data])
    return (
        <div>
            <Banner />
            <Products loaddata={loaddata} />
        </div>
    );
};

export default Home;