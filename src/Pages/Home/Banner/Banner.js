import React from 'react';
import image from '../../../images/banner-image.png'
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="container">
                <div className="banner-content">
                    <h1>Find Your Next Car at Go AutoCar</h1>
                    <p>
                        Allow us to guide you through the innovative stress free
                        approach in finding your dream car.
                    </p>
                </div>
                <div className="banner-img">
                    <img src={image} alt="Banner Car" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
