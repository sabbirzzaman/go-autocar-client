import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useCars from '../../../hooks/useCars';
import ManageInventoryItem from '../ManageInventoryItem/ManageInventoryItem';
import './ManageInventory.css';

const ManageInventory = () => {
    // get inventory data using custom hook
    const [cars] = useCars('http://localhost:5000/cars');

    const data = [
        {
            _id: '626c22fd8bc7e2c3871b8f7b',
            name: 'Mazda MAZDA6',
            image: 'https://i.ibb.co/6HTTCqW/car1.jpg',
            price: '$31,797',
            quantity: 25,
            supplier: 'Mazda',
            description:
                'Nisi cupidatat aute sint nisi nulla nisi aute nulla ipsum esse nostrud id id. Ea enim velit qui cillum veniam exercitation ullamco in amet velit tempor consectetur cupidatat irure.',
        },
        {
            _id: '626c22fd8bc7e2c3871b8f7c',
            name: 'Audi A4',
            image: 'https://i.ibb.co/QcjwVhj/car2.jpg',
            price: '$81,503',
            quantity: 8,
            supplier: 'Audi',
            description:
                'Nisi cupidatat aute sint nisi nulla nisi aute nulla ipsum esse nostrud id id. Ea enim velit qui cillum veniam exercitation ullamco in amet velit tempor consectetur cupidatat irure.',
        },
        {
            _id: '626c22fd8bc7e2c3871b8f7d',
            name: 'Audi A6',
            image: 'https://i.ibb.co/K58hQRW/car3.jpg',
            price: '$85,166',
            quantity: 17,
            supplier: 'Audi',
            description:
                'Nisi cupidatat aute sint nisi nulla nisi aute nulla ipsum esse nostrud id id. Ea enim velit qui cillum veniam exercitation ullamco in amet velit tempor consectetur cupidatat irure.',
        },
    ];

    return (
        <div className="manage-inventory">
            <div className="container">
                <div className="manage-invt-title">
                    <h2>Manage All Inventories</h2>
                    <div className="add-new-item">
                    <button>Add New Item <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
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
