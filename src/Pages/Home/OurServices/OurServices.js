import { faDiamond, faGear, faSearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ServiceItem from '../ServiceItem/ServiceItem';
import './OurServices.css';

const OurServices = () => {
    const services = [
        {
            id: 1,
            icon: faGear,
            name: 'Vehicle Service',
            details:
                'A car service is a maintenance check-up that is carried out at set time intervals (at least every year)',
        },
        {
            id: 2,
            icon: faSearch,
            name: 'Auto Detailing',
            details:
                'We are here to start you off on some of the basics. Basics that probably sound too detailed to be basic.',
        },
        {
            id: 4,
            icon: faDiamond,
            name: 'Warranty Service',
            details:
                'Freedom of choice in which repair shop to use. Take it to your local dealership or your local Certified mechanic.',
        },
    ];

    return (
        <div className="service-container">
            <div className="container">
                <div className="services-title">
                    <h2>What We Do</h2>
                </div>

                <div className="services">
                    {services.map((service) => (
                        <ServiceItem key={service.id} service={service}></ServiceItem>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurServices;
