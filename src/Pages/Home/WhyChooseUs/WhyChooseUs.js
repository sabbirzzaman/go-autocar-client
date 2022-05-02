import { faTag, faCar, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const whyChooseUs = [
        {
            id: 1,
            icon: faTag,
            name: 'Why Choose Us?',
            details:
                'Our Stress-Free Finance Department That Can Find Financial Solutions To Save You Money.',
        },
        {
            id: 2,
            icon: faCar,
            name: 'Trusted By Thousands',
            details:
                'Our Stress-Free Finance Department That Can Find Financial Solutions To Save You Money.',
        },
        {
            id: 3,
            icon: faShieldHalved,
            name: 'Wide Range of Brands',
            details:
                'Our Stress-Free Finance Department That Can Find Financial Solutions To Save You Money.',
        },
    ];

    return (
        <div className="choose-us-container">
            <div className="container">
                <div className="choose-us-title">
                    <h2>Why Choose Us?</h2>
                </div>

                <div className="choose-us">
                    {whyChooseUs.map((chooseUs) => (
                        <div key={chooseUs.id} className="choose-us-item">
                            <FontAwesomeIcon
                                icon={chooseUs.icon}
                            ></FontAwesomeIcon>

                            <div>
                                <h3>{chooseUs.name}</h3>
                                <p>{chooseUs.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
