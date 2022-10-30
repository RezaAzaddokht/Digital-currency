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
            <input type='text' placeholder='Search' />
            {
                coin.map(item => <p>{item.name}</p> )
            }
        </div>
    );
}
 
export default Landing;