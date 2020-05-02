import React from 'react'
import ItrolleyProduct from '../../abstractions/ItrolleyProduct';
import styles from './index.module.css'
import CustomModal from '../../CustomModal';

const TrolleyProduct: React.FC<ItrolleyProduct> = ({productId, productName, image, quantity, total}) => {
    console.log(productId)
    const removeItem = () =>{}
    const addItem =() => {}
    const clearItem =() => {}
    return (
        <div className={styles.checkout_item}>
            <div className={styles.image_container}>
                <img src={image} alt='item' />
            </div>
            <span className={styles.name}>{productName}</span>
            <span className={styles.quantity}>
                <div className={styles.arrow} onClick={() => removeItem()}>
                    &#10094;
                </div>
                <span className={styles.value}>{quantity}</span>
                <div className={styles.arrow} onClick={() => addItem()}>
                    &#10095;
                </div>
            </span>
            <span className={styles.price}>{total}</span>
            <CustomModal action={<>remove</>} logo={"&#10005"}handleSave={() => clearItem()} />
        </div>
    )
}



export default TrolleyProduct;
