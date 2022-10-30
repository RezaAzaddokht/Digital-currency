import React, { useEffect, useState } from 'react';
import { getApi } from '../services/api';
import Loader from './Loader';

const Landing = () => {

    const [coin , setCoin] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setCoin(await getApi())
        }

        fetchApi();
    } , [])

    return (
        <>
            <input type='text' placeholder='Search' />
            {
                coin.length ? 
                <div>
                    {
                        coin.map(item => <p>{item.name}</p> )
                    }
                </div> :
                <Loader />
            }
            
            
        </>
    );
}
 
export default Landing;