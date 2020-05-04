import React from 'react'
import ItrolleyProduct from '../../abstractions/ItrolleyProduct';
import styles from './index.module.css'
import CustomModal from '../../CustomModal/Confirmation';
import Tbody from '../../custom_table/Tbody';

const TrolleyProduct: React.FC<ItrolleyProduct> = ({productId, productName, image, quantity, total}) => {
    console.log(productId)
    const removeItem = () =>{}
    const addItem =() => {}
    const clearItem =() => {}
    return (
        <Tbody>
            <tr className={styles.image_container}>
                <td><img src={image} alt='item' /></td>
            </tr>
            <tr className={styles.name}><td>{productName}</td></tr>
            <tr className={styles.quantity}>
                <td className={styles.arrow} onClick={() => removeItem()}>
                    &#10094;
                </td>
                <td className={styles.value}>{quantity}</td>
                <td className={styles.arrow} onClick={() => addItem()}>
                    &#10095;
                </td>
            </tr>
            <tr className={styles.price}><td>{total}</td></tr>
            <tr><td><CustomModal action={<>remove</>} logo={"/cross.png"}handleSave={() => clearItem()} /></td></tr>
        </Tbody>
    )
}



export default TrolleyProduct;
