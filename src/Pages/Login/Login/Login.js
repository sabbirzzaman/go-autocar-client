import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    // Auth for login with email and password
    const [signInWithEmailAndPassword, user] =
        useSignInWithEmailAndPassword(auth);

    // login with email and pass
    const onSubmit = ({email, password}) => {
        signInWithEmailAndPassword(email, password);
    };

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user]);

    return (
        <div className="form-container">
            <div className="container">
                <div className="form-title">
                    <h2>Login</h2>
                </div>

                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="field-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            {...register('email')}
                            required
                        />
                    </div>

                    <div className="field-group">
                        <div className="password-label">
                            <label htmlFor="password">Password</label>
                            <Link to="/forget-password">Forget Password?</Link>
                        </div>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter a password"
                            {...register('password')}
                            required
                        />
                    </div>
                    <input type="submit" value="Register" />
                </form>

                <div className="user-help">
                    <p>
                        Don't have an account?{' '}
                        <Link to="/register">Register</Link>
                    </p>
                </div>

                <div className="divider">OR</div>
                <div className="social-login">
                    <button className="google-btn">
                        <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>{' '}
                        <span>Continue With Google</span>
                    </button>

                    <button className="facebook-btn">
                        <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>{' '}
                        <span>Continue With Facebook</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
