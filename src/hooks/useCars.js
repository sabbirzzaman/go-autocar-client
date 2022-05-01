import { useEffect, useState } from 'react';

const useCars = (url, dep) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setCars(data));
    }, [dep]);

    return [cars, setCars];
};

export default useCars;
