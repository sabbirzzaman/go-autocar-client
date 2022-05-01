import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import './Home.css'

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Inventory></Inventory>
            <About></About>
        </>
    );
};

export default Home;