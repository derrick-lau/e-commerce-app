import React from 'react'
import ItrolleyProduct from '../../abstractions/ItrolleyProduct';
import styles from './index.module.css'
import CustomModal from '../../CustomModal';
import Tbody from '../../custom_table/Tbody';

const TrolleyProduct: React.FC<ItrolleyProduct> = ({productId, productName, image, quantity, total}) => {
    console.log(productId)
    const removeItem = () =>{}
    const addItem =() => {}
    const clearItem =() => {}
    return (
        <Tbody>
            <tr className={styles.image_container}>
                <img src={image} alt='item' />
            </tr>
            <tr className={styles.name}>{productName}</tr>
            <tr className={styles.quantity}>
                <td className={styles.arrow} onClick={() => removeItem()}>
                    &#10094;
                </td>
                <td className={styles.value}>{quantity}</td>
                <td className={styles.arrow} onClick={() => addItem()}>
                    &#10095;
                </td>
            </tr>
            <tr className={styles.price}>{total}</tr>
            <CustomModal action={<>remove</>} logo={"/cross.png"}handleSave={() => clearItem()} />
        </Tbody>
    )
}



export default TrolleyProduct;
