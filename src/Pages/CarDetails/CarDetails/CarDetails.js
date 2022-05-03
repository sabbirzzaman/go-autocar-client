import { faCar, faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useCars from '../../../hooks/useCars';
import toast from 'react-hot-toast';
import './CarDetails.css';

const CarDetails = () => {
    const { carId } = useParams();
    const navigate = useNavigate();

    // store car quantity
    const [carQuantity, setCarQuantity] = useState(0);

    // get single car data by id using custom hook
    const [{ name, image, price, quantity, supplier, description }] = useCars(
        `https://go-autocar.herokuapp.com/car/${carId}`
    );

    const priceWithComma = price
        ?.toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    useEffect(() => {
        setCarQuantity(quantity);
    }, [quantity]);

    // handle remove car quantity
    const handleCarDeliver = () => {
        if (carQuantity !== 0) {
            const updatedCars = carQuantity - 1;
            setCarQuantity(updatedCars);

            fetch(`https://go-autocar.herokuapp.com/car/${carId}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ quantity: updatedCars }),
            })
                .then((res) => res.json())
                .then((data) =>
                    toast.success('One car removed form inventory!')
                );
        }
    };

    // React form hook
    const { register, handleSubmit, reset } = useForm();

    // handle add cars to inventory
    const onSubmit = (data) => {
        const updatedCars =
            parseInt(data.addToInventory) + parseInt(carQuantity);
        setCarQuantity(updatedCars);

        fetch(`https://go-autocar.herokuapp.com/car/${carId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ quantity: updatedCars }),
        })
            .then((res) => res.json())
            .then((result) => toast.success(`Cars added to inventory!`));
        reset();
    };

    return (
        <div className="car-details-container">
            <div className="container">
                <div className="car-manage-container">
                    <div className="car-info">
                        <p>
                            Supplier: <b>{supplier}</b>
                        </p>
                        <h2>{name}</h2>
                        <img src={image} alt={name} />
                    </div>
                    <div className="car-manage">
                        <div className="price">
                            <FontAwesomeIcon
                                icon={faSackDollar}
                            ></FontAwesomeIcon>
                            <p>${priceWithComma}</p>
                        </div>
                        <div className="quantity">
                            <FontAwesomeIcon icon={faCar}></FontAwesomeIcon>
                            <p>{carQuantity}</p>
                        </div>
                        <form
                            className="add-inventory"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <input
                                type="number"
                                placeholder="Enter quantity"
                                {...register('addToInventory')}
                                required
                            />
                            <input type="submit" value="Add To Stock" />
                        </form>
                        <div className="remove-inventory">
                            <button onClick={handleCarDeliver}>
                                Deliver A Car
                            </button>
                        </div>

                        <div className="manage-all">
                            <button
                                onClick={() => navigate('/manage-inventory')}
                            >
                                Manage All Inventories
                            </button>
                        </div>
                    </div>
                </div>
                <div className="car-details">
                    <h3>Additional Details:</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;
