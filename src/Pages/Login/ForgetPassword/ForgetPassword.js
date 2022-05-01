import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import toast from 'react-hot-toast';
import './ForgetPassword.css';

const ForgetPassword = () => {
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (email) => {
        await sendPasswordResetEmail(email.email);
        toast.success('Reset email send to your email!');
        reset();
    };

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
