import { faCar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InventoryItem.css';

const InventoryItem = ({ car }) => {
    const { _id, name, image, price, quantity, supplier, description } = car;
    const navigate = useNavigate();

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
            <button onClick={() => navigate(`inventory/${_id}`)}>Manage Stock</button>
        </div>
    );
};

export default InventoryItem;
