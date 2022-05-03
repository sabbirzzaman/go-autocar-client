import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    // auth for user
    const [user, loading] = useAuthState(auth);

    // Header active link
    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });

        return (
            <div>
                <Link
                    style={{ color: match ? '#0c3eb8' : '' }}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
            </div>
        );
    }

    return (
        <div className="header-container">
            <nav className="container">
                <div className="site-logo">
                    <h3 onClick={() => navigate('/')}>Go AutoCar</h3>
                </div>

                <div className={!open ? 'navigation' : 'navigation nav-mobile'}>
                    <CustomLink to="/home">Home</CustomLink>
                    <CustomLink to="/about">About</CustomLink>
                    <CustomLink to="/blog">Blog</CustomLink>

                    {user && (
                        <>
                            <CustomLink to="/manage-inventory">
                                Manage Cars
                            </CustomLink>
                            <CustomLink to="/my-cars">My Cars</CustomLink>
                            <CustomLink to="/add-car">Add Car</CustomLink>
                        </>
                    )}

                    {loading ? (
                        ''
                    ) : (
                        <div className="entry-point">
                            {user ? (
                                <button onClick={() => signOut(auth)}>
                                    Sign Out
                                </button>
                            ) : (
                                <>
                                    <CustomLink to="/login">Login</CustomLink>
                                    <button
                                        onClick={() => navigate('/register')}
                                    >
                                        Register
                                    </button>
                                </>
                            )}
                        </div>
                    )}
                </div>

                {
                    <div className='nav-ber'>
                        <FontAwesomeIcon onClick={() => setOpen(!open)} icon={!open? faBars : faX}></FontAwesomeIcon>
                    </div>
                }
            </nav>
        </div>
    );
};

export default Header;
