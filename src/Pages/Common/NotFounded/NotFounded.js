import React from 'react';
import notFounded from '../../../images/404.png';
import './NotFounded.css';

const NotFounded = () => {
    return (
        <div className="not-founded-container">
            <div className="container">
                <img src={notFounded} alt="Page not founded" />
                <h3>Opps! Page Not Founded</h3>
            </div>
        </div>
    );
};

export default NotFounded;
