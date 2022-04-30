import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ManageInventoryItem.css'

const ManageInventoryItem = ({car}) => {
    const { name, price, quantity, supplier } = car;

    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{supplier}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></td>
            </tr>
        </>
    );
};

export default ManageInventoryItem;