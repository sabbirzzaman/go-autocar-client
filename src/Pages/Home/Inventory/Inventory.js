import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';
import './Inventory.css';

const Inventory = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then((res) => res.json())
            .then((data) => setCars(data));
    }, []);

    return (
        <div className="inventory-container">
            <div className="container">
                <div className="inventory-title">
                    <h2>Our Inventory</h2>
                </div>
                <div className="inventory">
                    {cars.map((car) => (
                        <InventoryItem key={car._id} car={car}></InventoryItem>
                    ))}
                </div>
                <div className="all-inventory">
                    <button>View All <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default Inventory;
