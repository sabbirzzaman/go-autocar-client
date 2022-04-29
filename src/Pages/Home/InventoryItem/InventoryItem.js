import React from 'react';
import './InventoryItem.css'

const InventoryItem = ({car}) => {
    const {name, image, price, quantity, supplier, description} = car;
    return (
        <div className='inventory-item'>
            <img src={image} alt={name} />

            <div className="inventory-details">
                
            </div>
        </div>
    );
};

export default InventoryItem;