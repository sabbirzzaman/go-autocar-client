import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ManageInventoryItem.css'

const ManageInventoryItem = ({car}) => {
    const { name, price, quantity, supplier } = car;

    // Comma added for price
    const priceWithComma = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{supplier}</td>
                <td>{quantity}</td>
                <td>${priceWithComma}</td>
                <td><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></td>
            </tr>
        </>
    );
};

export default ManageInventoryItem;