import React from 'react'
import styles from './index.module.css'
import Iproduct from '../../abstractions/Iproduct';

const Product: React.FC<Iproduct> = ({id, product_name, imageUrl, price }) => {

    return (
        <section id={id.toString()} className={styles.product} style={{backgroundImage: `url(${imageUrl})`}}>
                <div>{product_name}</div>
                <div>{price}</div>
        </section>
    )
}



export default Product;
