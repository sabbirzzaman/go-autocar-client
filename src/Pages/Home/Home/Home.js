import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import OurServices from '../OurServices/OurServices';
import './Home.css'

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Inventory></Inventory>
            <About></About>
            <OurServices></OurServices>
        </>
    );
};

export default Home;