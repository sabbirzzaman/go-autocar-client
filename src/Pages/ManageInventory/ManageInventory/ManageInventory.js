import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import ManageInventoryItem from '../ManageInventoryItem/ManageInventoryItem';
import Loading from '../../Common/Loading/Loading';
import toast from 'react-hot-toast';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './ManageInventory.css';

const ManageInventory = () => {
    // total page number
    const [cars, setCars] = useState([])
    const [pages, setPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [filter, setFilter] = useState(10);

    // get inventory data
    const carsUrl = `https://go-autocar.herokuapp.com/cars?page=${currentPage}&filter=${filter}`;

    useEffect(() => {
        axios.get(carsUrl).then((res) => {setCars(res.data)});
    }, [currentPage, filter]);

    // get product count
    const pagesUrl = 'https://go-autocar.herokuapp.com/cars-pages';

    useEffect(() => {
        axios.get(pagesUrl).then((res) => {
            const count = res.data.count;
            const totalPages = Math.ceil(count / parseInt(filter));
            setPages(totalPages);
        });
    }, [filter]);

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
                        axios
                            .delete(
                                `https://go-autocar.herokuapp.com/car/${id}`
                            )
                            .then((res) => {
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
                <div className="table-bar">
                    <h3>Manage All Inventories</h3>

                    <select defaultValue={'10'} onChange={(e) => setFilter(e.target.value)}>
                        <option value="5">Show 5 Cars</option>
                        <option value="10">
                            Show 10 Cars
                        </option>
                        <option value="15">Show 15 Cars</option>
                        <option value="20">Show 20 Cars</option>
                    </select>
                </div>

                <div className="table-container">
                    {!cars.length ? (
                        <Loading height={'50vh'}></Loading>
                    ) : (
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
                    )}
                </div>

                <div className="table-bar">
                    <div className="pages">
                        {[...Array(pages).keys()].map((page) => (
                            <button
                                key={page}
                                className={
                                    page === currentPage
                                        ? 'pagination-btn current'
                                        : 'pagination-btn'
                                }
                                onClick={() => setCurrentPage(page)}
                            >
                                {page + 1}
                            </button>
                        ))}
                    </div>

                    <div className="add-new-car">
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
            </div>
        </div>
    );
};

export default ManageInventory;
