import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCars from '../../../hooks/useCars';
import ManageInventoryItem from '../ManageInventoryItem/ManageInventoryItem';
import { confirmAlert } from 'react-confirm-alert';
import toast from 'react-hot-toast';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './ManageInventory.css';

const ManageInventory = () => {
    // get inventory data using custom hook
    const [cars, setCars] = useCars('https://go-autocar.herokuapp.com/cars');

    const navigate = useNavigate();

    // delete an car form database
    const handleDeleteCar = (id) => {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure you want to delete this car?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        fetch(`https://go-autocar.herokuapp.com/car/${id}`, {
                            method: 'DELETE',
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                const remainingCars = cars.filter(
                                    (car) => car._id !== id
                                );
                                setCars(remainingCars);
                                toast.success('Car deleted successfully!');
                            });
                    },
                },
                {
                    label: 'No',
                    onClick: () => '',
                },
            ],
        });
    };

    return (
        <div className="manage-inventory">
            <div className="container">
                <div className="manage-invt-title">
                    <h2>Manage All Inventories</h2>
                    <div className="add-new-item">
                        <button
                            onClick={() => {
                                navigate('/add-car');
                            }}
                        >
                            Add New Car{' '}
                            <FontAwesomeIcon
                                icon={faArrowRight}
                            ></FontAwesomeIcon>
                        </button>
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
                                deleteCar={handleDeleteCar}
                            ></ManageInventoryItem>
                        ))}
                    </tbody>
                </table>

                <div className="add-new-item mobile">
                        <button
                            onClick={() => {
                                navigate('/add-car');
                            }}
                        >
                            Add New Item{' '}
                            <FontAwesomeIcon
                                icon={faArrowRight}
                            ></FontAwesomeIcon>
                        </button>
                    </div>
            </div>
        </div>
    );
};

export default ManageInventory;
