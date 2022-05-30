import axios from 'axios';
import { useEffect, useState } from 'react';

const useCars = (url) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios
            .get(url)
            .then((res) => setCars(res.data))
            .catch((err) => console.log(err));
    }, [url]);

    return [cars, setCars];
};

export default useCars;
