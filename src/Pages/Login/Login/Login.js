import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

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
                        Don't have an account? <Link to="/register">Register</Link>
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
