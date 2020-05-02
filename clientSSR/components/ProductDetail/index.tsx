import React from 'react'
import styles from './index.module.css'
import Iproduct from '../abstractions/Iproduct';
import Custom_button from '../Custom_button';

const ProductDetail: React.FC<Iproduct> = ({id, productName, image, price}) => (

    <section className={styles.ProductDetail}>
        <img className={styles.image} alt={productName} src={image} />
        <div className={styles.content}>
            <p style={{margin:"0.5em"}}>Name: {productName}</p>
            <p style={{margin:"0.5em"}}>Price: £{price}</p>
            <div className={styles.ButtonContainer}>
                <Custom_button style={{margin:"1em"}} onClick={()=>id}>Add to Trolley</Custom_button>
                <Custom_button style={{margin:"1em"}} onClick={()=>id}>Add to WishList</Custom_button>
            </div>
        </div>
    </section>
) 




export default ProductDetail;
