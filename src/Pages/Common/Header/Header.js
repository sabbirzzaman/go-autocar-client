import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='header-container'>
           <nav className="container">
               <div className="site-logo">
                   <h3 onClick={() => navigate('/')}>Go AutoCar</h3>
               </div>

               <div className="navigation">
                    <Link to='/home'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/inventory'>Inventory</Link>

                    <div className="entry-point">
                        <Link to='/login'>Login</Link>
                        <button onClick={() => navigate('/register')}>Register</button>
                    </div>
               </div>
           </nav>
        </div>
    );
};

export default Header;