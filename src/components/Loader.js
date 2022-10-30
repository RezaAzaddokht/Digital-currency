import React from 'react';

//gif
import spinner from '../gif/spinner.gif'

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt='gif' />
            <h2>Landing ...</h2>
        </div>
    );
 }
  
 export default Loader;