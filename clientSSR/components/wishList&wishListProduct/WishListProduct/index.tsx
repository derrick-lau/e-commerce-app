import React from 'react'
import styles from './index.module.css'
import CustomModal from '../../CustomModal/Confirmation';
import Tbody from '../../custom_table/Tbody';
import Iproduct from '../../abstractions/Iproduct';

const WishListProduct: React.FC<Iproduct> = ({id, productName, image, price}) => {
    console.log(id)
    const clearItem =() => {}
    return (
        <Tbody>
            <tr className={styles.image_container}>
                <td><img src={image} alt='item' /></td>
            </tr>
            <tr className={styles.name}><td>{productName}</td></tr>
            <tr className={styles.price}><td>{price}</td></tr>
            <tr><td><CustomModal action={<>remove</>} logo={"/cross.png"}handleSave={() => clearItem()} /></td></tr>
        </Tbody>
    )
}

export default WishListProduct;
