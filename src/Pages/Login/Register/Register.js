import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    // Auth for create account with email and password
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);

    // auth for updating name
    const [updateProfile] = useUpdateProfile(auth);

    // crate user with email and pass
    const onSubmit = async ({ name, email, password, confirmPass }) => {
        const displayName = name;

        if (password !== confirmPass) {
            return console.log('password not matched');
        }

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });
    };

    if(error) {
        console.log(error)
    }

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user]);

    return (
        <div className="form-container">
            <div className="container">
                <div className="form-title">
                    <h2>Register</h2>
                </div>

                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="field-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            {...register('name')}
                            required
                        />
                    </div>
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
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter a password"
                            {...register('password')}
                            required
                        />
                    </div>
                    <div className="field-group">
                        <label htmlFor="confirmPass">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPass"
                            placeholder="Confirm password"
                            {...register('confirmPass')}
                            required
                        />
                    </div>

                    <input type="submit" value="Register" />
                </form>
                <div className="user-help">
                    <p>
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </div>
                <div className="divider">OR</div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;
