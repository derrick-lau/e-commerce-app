import React from 'react'
import styles from './index.module.css'
import Product from '../Product'
import Istore from '../../abstractions/Istore'

const Store: React.FC<Istore> = ({products, title}) => {

    return (
        
        <main className={styles.storePreview}>
            <h1>{title}</h1>
            <section>
                {products.map(({...props}) => (
                    <Product key={props.id} {...props}/>
                ))}
            </section>
        </main>  
    )
}



export default Store;
