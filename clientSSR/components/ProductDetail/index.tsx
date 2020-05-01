import React from 'react'
import styles from './index.module.css'
import Iproduct from '../abstractions/Iproduct';
import Custom_button from '../Custom_button';
import ReviewTable from './review&reviewTable/ReviewTable';

const ProductDetail: React.FC<Iproduct> = ({id, productName, image, price, reviews}) => {

    return (
        <>
        <section className={styles.ProductDetail}>
            <img alt={productName} src={image} />
            <div>
                <h1>{productName}</h1>
                <h2>{price}</h2>
                <div className={styles.ButtonContainer}>
                    <Custom_button onClick={()=>id}>Add to Cart</Custom_button>
                    <Custom_button onClick={()=>id}>Add to WishList</Custom_button>
                </div>
            </div>
        </section>
        {reviews?(<ReviewTable reviews={reviews}/>):null}
        </>
    ) 
}



export default ProductDetail;
