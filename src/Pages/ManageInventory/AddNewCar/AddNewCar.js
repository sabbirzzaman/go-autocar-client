import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import toast from 'react-hot-toast';
import './AddNewCar.css';
import axios from 'axios';

const AddNewCar = () => {
    const { register, handleSubmit, reset } = useForm();

    // get user information
    const [user] = useAuthState(auth);

    // Add a new to car to the inventory
    const url = `https://kind-rose-beaver-tam.cyclic.app/cars?email=${user.email}`;

    const onSubmit = (data) => {
        axios.post(url, data).then((res) => {
            toast.success('Car added successfully!');
            reset();
        });
    };

    return (
        <div className="form-container">
            <div className="container">
                <div className="form-title">
                    <h2>Add New Car</h2>
                </div>

                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="field-group">
                        <input
                            type="text"
                            id="name"
                            placeholder="Car name"
                            {...register('name')}
                            required
                        />
                    </div>
                    <div className="field-group">
                        <input
                            type="text"
                            id="image"
                            placeholder="Image URL"
                            {...register('image')}
                            required
                        />
                    </div>
                    <div className="field-group">
                        <input
                            type="email"
                            id="email"
                            placeholder="Your Email"
                            value={user.email}
                            {...register('email')}
                            required
                            readOnly
                        />
                    </div>
                    <div className="field-group two-column">
                        <input
                            type="number"
                            id="price"
                            placeholder="Price"
                            {...register('price')}
                            required
                        />
                        <input
                            type="number"
                            id="quantity"
                            placeholder="Quantity"
                            {...register('quantity')}
                            required
                        />
                    </div>
                    <div className="field-group">
                        <input
                            type="text"
                            id="supplier"
                            placeholder="Supplier name"
                            {...register('supplier')}
                            required
                        />
                    </div>
                    <div className="field-group">
                        <textarea
                            placeholder="Additional car details"
                            {...register('description')}
                            id="additionalDetails"
                        ></textarea>
                    </div>
                    <input type="submit" value="Add A New Car" />
                </form>
                <div className="go-back">
                    <Link to="/manage-inventory">
                        Go To Manage Inventory{' '}
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>{' '}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AddNewCar;
