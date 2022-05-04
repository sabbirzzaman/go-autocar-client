import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import toast from 'react-hot-toast';
import Loading from '../../Common/Loading/Loading';
import useToken from '../../../hooks/useToken';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // redirect user to the requested page
    const from = location.state?.from?.pathname || '/';

    // Auth for login with email and password
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    // get access token
    const [token] = useToken(user);

    const { register, handleSubmit } = useForm();

    // login with email and pass
    const onSubmit = ({ email, password }) => {
        signInWithEmailAndPassword(email, password);
    };

    // navigate user
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
            toast.success(`Welcome! ${user?.user.displayName}`);
        }
    }, [token]);

    // handle firebase authentication error
    if (error?.message === 'Firebase: Error (auth/user-not-found).') {
        toast.error('Account does not exist');
    }

    if (error?.message === 'Firebase: Error (auth/wrong-password).') {
        toast.error('Entered an invalid password');
    }

    // login loading
    if (loading) {
        return <Loading></Loading>;
    }

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
                    <input type="submit" value="Login" />
                </form>

                <div className="user-help">
                    <p>
                        Don't have an account?{' '}
                        <Link to="/register">Register</Link>
                    </p>
                </div>

                <div className="divider">OR</div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;
