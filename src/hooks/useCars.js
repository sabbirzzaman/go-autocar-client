import axios from 'axios';
import { useEffect, useState } from 'react';

const useCars = (url) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get(url).then((res) => setCars(res.data));
    }, []);

    return [cars, setCars];
};

export default useCars;
