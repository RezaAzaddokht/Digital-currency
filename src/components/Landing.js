import React, { useEffect, useState } from 'react';
import { getApi } from '../services/api';

//components
import Coin from './Coin';
import Loader from './Loader';

const Landing = () => {

    const [coin , setCoin] = useState([]);
    const [search , setSearch] = useState("");

    useEffect(() => {
        const fetchApi = async () => {
            setCoin(await getApi())
        }

        fetchApi();
    } , [])

    const searchHandler = event => {
        setSearch(event.target.value)
    }

    const searchFilter = coin.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            <input type='text' placeholder='Search' value={search} onChange={searchHandler} />
            {
                coin.length ? 
                <div>
                    {
                        searchFilter.map(item => <Coin key={item.id}
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