import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="footer-container">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-column col-1">
                        <h3>Short About Us</h3>
                        <p>
                            From researching the vehicle you want to test
                            driving your options, we’re here to help with our
                            knowledgeable sales staff and an impressive
                            selection of cars, trucks, and SUVs.!
                        </p>
                    </div>

                    <div className="footer-column col-2">
                        <h3>Useful Links</h3>
                        <div>
                            <Link to="/home">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/manage-inventory">Inventory</Link>
                        </div>
                    </div>

                    <div className="footer-column col-3">
                        <h3>Join our growing community</h3>

                        <div className="mobile-app">
                            <div className="app">
                                <FontAwesomeIcon
                                    icon={faApple}
                                ></FontAwesomeIcon>
                                <p>
                                    Download on the <br />
                                    <b>App Store</b>
                                </p>
                            </div>
                            <div className="app">
                                <FontAwesomeIcon
                                    icon={faGooglePlay}
                                ></FontAwesomeIcon>
                                <p>
                                    Download on the <br />
                                    <b>App Store</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>Copyright &copy; {year} | Go AutoCar</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
