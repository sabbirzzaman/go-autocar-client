import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import CarItem from '../CarItem/CarItem';
import { confirmAlert } from 'react-confirm-alert';
import toast from 'react-hot-toast';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './MyCars.css';
import axios from 'axios';
import { signOut } from 'firebase/auth';

const MyCars = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const [cars, setCars] = useState([]);

    useEffect(() => {
        const getCars = async () => {
            try {
                const { data } = await axios.get(
                    `https://go-autocar.herokuapp.com/my-cars?email=${user?.email}`,
                    {
                        headers: {
                            authorization: `Bearer ${localStorage.getItem(
                                'accessToken'
                            )}`,
                        },
                    }
                );
                setCars(data);
            } catch (err) {
                if (
                    err.response.status === 401 ||
                    err.response.status === 403
                ) {
                    signOut(auth);
                    navigate('/login');
                    toast.error('Login Expired!');
                }
            }
        };
        getCars();
    }, [user]);

    // delete a car form database
    const handleDeleteCar = (id) => {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure you want to delete this car.',
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
        <div className="my-cars-container">
            <div className="container">
            <div className="car-header">
                    <h2>My Added Cars</h2>
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

                {cars.length !== 0 ? (
                    <div className="inventory">
                        {cars.map((car) => (
                            <CarItem
                                key={car._id}
                                car={car}
                                deleteCar={handleDeleteCar}
                            ></CarItem>
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h3>You dont have added any cars yet!</h3>
                        <button
                            onClick={() => {
                                navigate('/add-car');
                            }}
                        >
                            Add A New Car{' '}
                            <FontAwesomeIcon
                                icon={faArrowRight}
                            ></FontAwesomeIcon>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyCars;
