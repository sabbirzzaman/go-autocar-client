import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ServiceItem.css';

const ServiceItem = ({ service }) => {
    const { icon, name, details } = service;
    return (
        <div className="service-item">
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>

            <div>
                <h3>{name}</h3>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default ServiceItem;
