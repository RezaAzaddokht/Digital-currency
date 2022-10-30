import React, { useEffect, useState } from 'react';
import { getApi } from '../services/api';

//components
import Coin from './Coin';
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
                        coin.map(item => <Coin key={item.id}
                                               name={item.name}
                                               symbol={item.symbol}
                                               image={item.image}
                                               price={item.current_price}
                                               cap={item.market_cap}
                                               change={item.price_change_percentage_24h} /> )
                    }
                </div> :
                <Loader />
            }
            
            
        </>
    );
}
 
export default Landing;