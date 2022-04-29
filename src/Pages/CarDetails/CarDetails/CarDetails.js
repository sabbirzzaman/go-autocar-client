import { faCar, faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useCars from '../../../hooks/useCars';
import './CarDetails.css';

const CarDetails = () => {
    const { carId } = useParams();

    // get single car data by id using custom hook
    const [{ name, image, price, quantity, supplier, description }] = useCars(
        `http://localhost:5000/car/${carId}`
    );

    // React form hook
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

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
                            <FontAwesomeIcon icon={faSackDollar}></FontAwesomeIcon>
                            <p>{price}</p>
                        </div>
                        <div className="quantity">
                            <FontAwesomeIcon icon={faCar}></FontAwesomeIcon>
                            <p>{quantity}</p>
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
                            <input type="submit" value="Add Cars" />
                        </form>
                        <div className="remove-inventory">
                            <button>Deliver a car</button>
                        </div>
                        
                        <div className="manage-all">
                            <button>Manage All Inventory</button>
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
