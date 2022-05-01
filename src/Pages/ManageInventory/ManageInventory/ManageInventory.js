import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCars from '../../../hooks/useCars';
import ManageInventoryItem from '../ManageInventoryItem/ManageInventoryItem';
import './ManageInventory.css';

const ManageInventory = () => {
    // get inventory data using custom hook
    const [cars] = useCars('http://localhost:5000/cars');

    const navigate = useNavigate();

    return (
        <div className="manage-inventory">
            <div className="container">
                <div className="manage-invt-title">
                    <h2>Manage All Inventories</h2>
                    <div className="add-new-item">
                    <button onClick={() => {navigate('/add-new-car')}}>Add New Item <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                </div>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Supplier</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th>Clear</th>
                        </tr>
                    </thead>

                    <tbody>
                        {cars.map((car) => (
                            <ManageInventoryItem
                                key={car._id}
                                car={car}
                            ></ManageInventoryItem>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageInventory;
