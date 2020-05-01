import React, { useState } from 'react'
import styles from './index.module.css'
import Product from '../Product'
import Istore from '../../abstractions/Istore'

const Store: React.FC<Istore> = ({products, storeName}) => {
    const [getProducts, setGetProducts] = useState(products)

    // for fiter
    console.log(setGetProducts)

    return (
        
        <main className={styles.store}>
            <h1 className={styles.title} >{storeName}</h1>
            <section className={styles.products}>
                {getProducts.map(({...props}) => (
                    <Product key={props.id} {...props}/>
                ))}
            </section>
        </main>  
    )
}



export default Store;
