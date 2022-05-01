import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './AddNewCar.css';

const AddNewCar = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    // get user information
    const [user] = useAuthState(auth);

    // Add a new to car to the inventory
    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <div className="form-container">
            <div className="container">
                <div className="form-title">
                    <h2>Add New Item</h2>
                </div>

                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="field-group">
                        <input
                            type="email"
                            id="email"
                            value={user.email}
                            placeholder="Enter your email"
                            {...register('email')}
                            required
                            readOnly
                        />
                    </div>
                    <div className="field-group">
                        <input
                            type="text"
                            id="caeName"
                            placeholder="Car name"
                            {...register('caeName')}
                            required
                        />
                    </div>
                    <div className="field-group">
                        <input
                            type="text"
                            id="imageUrl"
                            placeholder="Image URL"
                            {...register('imageUrl')}
                            required
                        />
                    </div>
                    <div className="field-group two-column">
                        <input
                            type="text"
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
                            id="supplierName"
                            placeholder="Supplier name"
                            {...register('supplierName')}
                            required
                        />
                    </div>
                    <div className="field-group">
                        <textarea placeholder="Additional car details" id="additionalDetails"></textarea>
                    </div>
                    <input type="submit" value="Add A New Car" />
                </form>
            </div>
        </div>
    );
};

export default AddNewCar;
