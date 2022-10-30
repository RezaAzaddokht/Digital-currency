import React from 'react';

//css
import styles from './Coin.module.css'

const Coin = ({name , image , symbol , cap , change , price}) => {
    return (
        <div className={styles.container}>
            <img src={image} alt='coin' />
            <span className={styles.name}>{name}</span>
            <span className={styles.symbol}>{symbol.toUpperCase()}</span>
            <span className={styles.currentPrice}>$ {price.toLocaleString()}</span>
            <span className={change > 0 ? styles.greenPrice : styles.redPrice}>{change.toFixed(2)}</span>
            <span>$ {cap.toLocaleString()}</span>
        </div>
    );
}
 
export default Coin;