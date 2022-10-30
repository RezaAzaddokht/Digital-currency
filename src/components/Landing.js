import React, { useEffect, useState } from 'react';
import { getApi } from '../services/api';

const Landing = () => {

    const [coin , setCoin] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setCoin(await getApi())
        }

        fetchApi();
    } , [])

    return (
        <div>

        </div>
    );
}
 
export default Landing;