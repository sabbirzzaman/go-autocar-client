import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useCars from '../../../hooks/useCars';
import CarItem from '../CarItem/CarItem';
import './MyCars.css';

const MyCars = () => {
    const [user] = useAuthState(auth);

    const [cars] = useCars(`http://localhost:5000/my-cars?email=${user?.email}`, user);
    
    return (
        <div className="my-cars-container">
            <div className="container">
                <div className="car-title">
                    <h2>My Added Cars</h2>
                </div>

                <div className="inventory">
                    {cars.map((car) => (
                        <CarItem key={car._id} car={car}></CarItem>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyCars;
