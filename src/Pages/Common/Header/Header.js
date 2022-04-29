import React from 'react';
import { Link, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const navigate = useNavigate();

    // Header active link
    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });
      
        return (
          <div>
            <Link
              style={{ color: match ? "#0c3eb8" : "" }}
              to={to}
              {...props}
            >
              {children}
            </Link>
          </div>
        );
      }

    return (
        <div className='header-container'>
           <nav className="container">
               <div className="site-logo">
                   <h3 onClick={() => navigate('/')}>Go AutoCar</h3>
               </div>

               <div className="navigation">
                    <CustomLink to='/home'>Home</CustomLink>
                    <CustomLink to='/about'>About</CustomLink>
                    <CustomLink to='/inventory'>Inventory</CustomLink>

                    <div className="entry-point">
                        <CustomLink to='/login'>Login</CustomLink>
                        <button onClick={() => navigate('/register')}>Register</button>
                    </div>
               </div>
           </nav>
        </div>
    );
};

export default Header;