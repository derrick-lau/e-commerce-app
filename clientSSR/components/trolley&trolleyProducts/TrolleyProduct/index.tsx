import React from 'react'
import ItrolleyProduct from '../../../abstractions/ItrolleyProduct';
import styles from './index.module.css'
import CustomModal from '../../CustomModal/Confirmation';
import Tbody from '../../custom_table/Tbody';
import { TrolleyProductApi } from '../../../api';

const TrolleyProduct: React.FC<ItrolleyProduct> = ({productId, productName, image, quantity, total}) => {

    return (
        <Tbody>
            <tr className={styles.image_container}>
                <td><img src={image} alt='item' /></td>
            </tr>
            <tr className={styles.name}><td>{productName}</td></tr>
            <tr className={styles.quantity}>
                <td className={styles.arrow} onClick={()=> TrolleyProductApi()
                    .deleteOne(productId)
                    .catch(e => e.response? e.response.data.message: e)
                    .finally(()=>window.location.pathname="/trolley")
                }>
                    &#10094;
                </td>
                <td className={styles.value}>{quantity}</td>
                <td className={styles.arrow} onClick={()=> TrolleyProductApi()
                    .post(productId)
                    .catch(e => e.response? e.response.data.message: e)
                    .finally(()=>window.location.pathname="/trolley")
                }>
                    &#10095;
                </td>
            </tr>
            <tr className={styles.price}><td>{total}</td></tr>
            <tr>
                <td>
                    <CustomModal action={<>remove</>} logo={"/cross.png"} handleSave={()=> TrolleyProductApi()
                        .deleteAll(productId)
                        .catch(e => e.response? e.response.data.message: e)
                        .finally(()=>window.location.pathname="/trolley")
                    }/>
                </td>
            </tr>
        </Tbody>
    )
}



export default TrolleyProduct;
