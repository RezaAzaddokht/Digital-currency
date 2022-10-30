import React from 'react';

const Coin = ({name , image , symbol , cap , change , price}) => {
    return (
        <div>
            <img src={image} alt='coin' />
            <span>{name}</span>
            <span>{symbol.toUpperCase()}</span>
            <span>$ {price.toLocaleString()}</span>
            <span>{change.toFixed(2)}</span>
            <span>$ {cap.toLocaleString()}</span>
        </div>
    );
}
 
export default Coin;