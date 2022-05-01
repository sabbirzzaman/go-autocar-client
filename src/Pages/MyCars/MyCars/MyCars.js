import React from 'react';
import useCars from '../../../hooks/useCars';
import CarItem from '../CarItem/CarItem';
import './MyCars.css';

const MyCars = () => {
    const [cars] = useCars(`http://localhost:5000/cars`);

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
