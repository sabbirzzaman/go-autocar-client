import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Common/Loading/Loading';
import InventoryItem from '../InventoryItem/InventoryItem';
import './Inventory.css';

const Inventory = () => {
    const navigate = useNavigate();

    // get inventory data using custom hook
    const {data, isLoading} = useQuery('cars', () => axios.get('https://go-autocar.herokuapp.com/cars'))

    if(isLoading) {
        return <Loading></Loading>
    }

    const cars = data.data;

    // Set limited item for frontpage
    const recentCars = cars.slice(0, 6);

    return (
        <div className="inventory-container">
            <div className="container">
                <div className="inventory-title">
                    <h2>Our Inventory</h2>
                </div>

                {!cars.length ? (
                    <Loading height={'60vh'}></Loading>
                ) : (
                    <div className="inventory">
                        {recentCars.map((car) => (
                            <InventoryItem
                                key={car._id}
                                car={car}
                            ></InventoryItem>
                        ))}
                    </div>
                )}

                <div className="all-inventory">
                    <button
                        onClick={() => {
                            navigate('/manage-inventory');
                        }}
                    >
                        Manage All Inventories{' '}
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Inventory;
