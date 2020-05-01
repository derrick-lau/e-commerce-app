import React from 'react'
import styles from './index.module.css'
import Iproduct from '../../abstractions/Iproduct';
import Link from 'next/link';

const Product: React.FC<Iproduct> = ({id, productName, image, price, isInStock}) => {

    const handleView = () => {
        window.location.pathname=`/product/${id}?name=${productName}`
    }
    return (
        <>
        { isInStock? 
        (
            
            <section id={id.toString()} className={styles.product}>
                <Link  href={`/product/${productName}?id=${id}`}>
                    <a href={`/product/${productName}?id=${id}`} className={styles.image} onClick={handleView} style={{backgroundImage: `url(${image})`}}/>
                </Link>
                <footer className={styles.footer}>
                    <Link href={`/product/${productName}?id=${id}`} >
                        <a href={`/product/${productName}?id=${id}`} className={styles.name} >{productName}</a>
                    </Link>
                    <span className={styles.price}>{price}</span>
                </footer>
            </section>
        ) 
        :   null
        }
        </>
    )
}



export default Product;
