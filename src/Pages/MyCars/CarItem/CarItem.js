import React from 'react';
import { faCar, faPenNib, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import './CarItem.css';

const CarItem = ({ car }) => {
    const { _id, name, image, price, quantity, supplier, description } = car;

    // Comma added for price
    const priceWithComma = price
        ?.toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // short description for home page
    const shortDescription = description.slice(0, 130);

    const navigate = useNavigate();

    return (
        <div className="car-item">
            <div className="car-img">
                <p>{supplier}</p>
                <div className="manage-car">
                    <FontAwesomeIcon icon={faPenNib}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </div>
                <img src={image} alt={name} />
            </div>

            <div className="car-details">
                <h3>{name}</h3>
                <div>
                    <p>${priceWithComma}</p>
                    <span>
                        <FontAwesomeIcon icon={faCar}></FontAwesomeIcon>
                        {quantity}
                    </span>
                </div>
                <p>
                    <small title={description}>{shortDescription}...</small>
                </p>
            </div>
            <button onClick={() => navigate(`/inventory/${_id}`)}>
                Manage Stock
            </button>
        </div>
    );
};

export default CarItem;
