import React from 'react';
import about from '../../../images/about.jpg';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="container">
                <div className="about-img">
                    <img src={about} alt="About Go AutoCar" />
                </div>
                <div className="about-content">
                    <h2>About Us</h2>
                    <h3>
                        At Go AutoCar, we want to provide you with the best
                        automotive experience possible.
                    </h3>
                    <p>
                        From researching the vehicle you want to test driving
                        your options, we’re here to help with our knowledgeable
                        sales staff and an impressive selection of cars, trucks,
                        and SUVs.!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
