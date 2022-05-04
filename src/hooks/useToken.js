import axios from 'axios';
import { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const getToken = async () => {
            const url = `https://go-autocar.herokuapp.com/login`;
            const email = user?.user.email;

            if (email) {
                const { data } = await axios.post(url, { email });
                localStorage.setItem('accessToken', data.accessToken);
                setToken(data.accessToken);
            }
        };
        getToken();
    }, [user]);
    return [token];
};

export default useToken;
