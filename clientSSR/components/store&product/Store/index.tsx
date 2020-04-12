import React, { useState} from 'react'
import styles from './index.module.css'
import Product from '../Product'

const Store: React.FC = () => {
    const [store, ] = useState({
        title:"",
        products:[{id:0, name:"test", imageUrl:"test", price:-1},{id:2, name:"test2", imageUrl:"test2", price:-1}]
    })

    return (
        <main className={styles.storePreview}>
            <h1>{store.title}</h1>
            <section>
                {store.products.map(({...props}) => (
                    <Product key={props.id} {...props}/>
                ))}
            </section>
        </main>  
    )
}



export default Store;
