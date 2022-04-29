import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './ForgetPassword.css'

const ForgetPassword = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div className="form-container">
            <div className="container">
                <div className="form-title">
                    <h2>Forget Password?</h2>
                    <p>
                        Enter the email address you used when you joined and
                        we'll send you instructions to reset your password.
                    </p>
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
                    <input type="submit" value="Send Reset Email" />
                </form>

                <div className="user-help">
                    <p>
                        A new member? <Link to="/register">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
