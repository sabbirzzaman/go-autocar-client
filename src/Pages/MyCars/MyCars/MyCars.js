import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useCars from '../../../hooks/useCars';
import CarItem from '../CarItem/CarItem';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './MyCars.css';

const MyCars = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const [cars, setCars] = useCars(
        `http://localhost:5000/my-cars?email=${user?.email}`,
        user
    );

    // delete an car form database
    const handleDeleteCar = (id) => {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure you want to delete this car?.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        fetch(`http://localhost:5000/car/${id}`, {
                            method: 'DELETE',
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                console.log(data);
                                const remainingCars = cars.filter(
                                    (car) => car._id !== id
                                );
                                setCars(remainingCars);
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
                <div className="car-title">
                    <h2>My Added Cars</h2>
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
                                navigate('/add-new-car');
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
