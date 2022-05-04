import React, { useEffect } from 'react';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    useSignInWithFacebook,
    useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './SocialLogin.css';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useToken from '../../../hooks/useToken';

const SocialLogin = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // get google auth form react firebase hooks
    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);

    // get google auth form react firebase hooks
    const [signInWithFacebook, facebookUser] = useSignInWithFacebook(auth);

    // get access token
    const [token] = useToken(googleUser || facebookUser);

    // get user name
    const name = googleUser?.user.displayName || facebookUser?.user.displayName;

    // redirect user to the requested page
    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
            name && toast.success(`Welcome! ${name}`);
            console.log(name)
        }
    }, [token]);

    return (
        <div className="social-login">
            <button onClick={() => signInWithGoogle()} className="google-btn">
                <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>{' '}
                <span>Continue With Google</span>
            </button>

            <button
                onClick={() => signInWithFacebook()}
                icon={faFacebook}
                className="facebook-btn"
            >
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>{' '}
                <span>Continue With Facebook</span>
            </button>
        </div>
    );
};

export default SocialLogin;
