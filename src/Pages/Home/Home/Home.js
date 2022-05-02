import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import OurServices from '../OurServices/OurServices';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import './Home.css'

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <About></About>
            <Inventory></Inventory>
            <OurServices></OurServices>
            <WhyChooseUs></WhyChooseUs>
        </>
    );
};

export default Home;