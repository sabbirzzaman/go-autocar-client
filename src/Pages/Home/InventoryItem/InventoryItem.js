import { faCar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InventoryItem.css';

const InventoryItem = ({ car }) => {
    const { _id, name, image, price, quantity, supplier, description } = car;

    // Comma added for price
    const priceWithComma = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    // short description for home page
    const shortDescription = description.slice(0, 130);

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
                    <p>${priceWithComma}</p>
                    <span><FontAwesomeIcon icon={faCar}></FontAwesomeIcon>{quantity}</span>
                </div>
                <span>
                    <small title={description}>{shortDescription}...</small>
                </span>
            </div>
            <button onClick={() => navigate(`/inventory/${_id}`)}>Manage Stock</button>
        </div>
    );
};

export default InventoryItem;
