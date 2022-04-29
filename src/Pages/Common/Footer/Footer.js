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
                    <div className="footer-column">
                        <h3>Short About Us</h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Minus autem qui in inventore tenetur
                            perspiciatis. Delectus, maiores alias earum nam,
                            laudantium dicta fuga sint
                        </p>
                    </div>

                    <div className="footer-column">
                        <h3>Useful Links</h3>
                        <Link to="/home">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/inventory">Inventory</Link>
                    </div>

                    <div className="footer-column">
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
