import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCars from '../../../hooks/useCars';
import InventoryItem from '../InventoryItem/InventoryItem';
import './Inventory.css';

const Inventory = () => {
    // get inventory data using custom hook
    const [cars] = useCars('https://go-autocar.herokuapp.com/cars');

    // Set limited item for frontpage
    const recentCars = cars.slice(0, 6);

    const navigate = useNavigate();

    return (
        <div className="inventory-container">
            <div className="container">
                <div className="inventory-title">
                    <h2>Our Inventory</h2>
                </div>
                <div className="inventory">
                    {recentCars.map((car) => (
                        <InventoryItem key={car._id} car={car}></InventoryItem>
                    ))}
                </div>
                <div className="all-inventory">
                    <button onClick={() => {navigate('/manage-inventory')}}>Manage All Inventories <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default Inventory;
