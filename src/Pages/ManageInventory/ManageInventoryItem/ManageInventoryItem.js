import { faPenNib, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageInventoryItem.css';

const ManageInventoryItem = ({ car, deleteCar }) => {
    const { _id, name, price, quantity, supplier } = car;

    const navigate = useNavigate();

    // Comma added for price
    const priceWithComma = price
        ?.toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{supplier}</td>
                <td>{quantity ? quantity : <span className='sold'>Sold <span>Out</span></span>}</td>
                <td>${priceWithComma}</td>
                <td className='manage'>
                    <FontAwesomeIcon
                         onClick={() => navigate(`/inventory/${_id}`)}
                        icon={faPenNib}
                    ></FontAwesomeIcon>

                    <FontAwesomeIcon
                        onClick={() => deleteCar(_id)}
                        icon={faTrash}
                    ></FontAwesomeIcon>
                </td>
            </tr>
        </>
    );
};

export default ManageInventoryItem;
