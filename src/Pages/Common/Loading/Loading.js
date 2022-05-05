import React from 'react';
import './Loading.css';

const Loading = ({ height }) => {
    return (
        <div
            style={{ height: height || '100vh' }}
            className="loading-container"
        >
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loading;
