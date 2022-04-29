import { faCar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './InventoryItem.css';

const InventoryItem = ({ car }) => {
    const { name, image, price, quantity, supplier, description } = car;
    return (
        <div className="inventory-item">
            <div className="inventory-img">
                <p>{supplier}</p>
                <img src={image} alt={name} />
            </div>

            <div className="inventory-details">
                <h3>{name}</h3>
                <div>
                    <p>{price}</p>
                    <span><FontAwesomeIcon icon={faCar}></FontAwesomeIcon>{quantity}</span>
                </div>
                <p>
                    <small>{description}</small>
                </p>
            </div>
            <button>Update</button>
        </div>
    );
};

export default InventoryItem;
