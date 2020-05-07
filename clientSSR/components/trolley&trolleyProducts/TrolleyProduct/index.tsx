import React, { useState } from 'react'
import ItrolleyProduct from '../../../abstractions/ItrolleyProduct';
import styles from './index.module.css'
import CustomModal from '../../CustomModal/Confirmation';
import Tbody from '../../custom_table/Tbody';
import { TrolleyProductApi } from '../../../api';
import Link from 'next/link';

const TrolleyProduct: React.FC<ItrolleyProduct> = ({productId, productName, image, quantity, total, price, sum, setSum}) => {
    const [display, setDisplay] = useState({quantity:quantity, total:total})
    return (
        <Tbody>
            <tr className={styles.image_container}>
                <td>
                    <Link href={`/product/${productName}?id=${productId}`}>
                        <a href={`/product/${productName}?id=${productId}`}>
                            <img src={image} alt='item' />
                        </a>
                    </Link>
                </td>
            </tr>
            <tr className={styles.name}><td>{productName}</td></tr>
            <tr className={styles.quantity}>
                <td className={styles.arrow} onClick={()=> TrolleyProductApi()
                    .deleteOne(productId)
                    .then(()=>{
                        if(display.quantity>1) {
                            setDisplay({quantity:display.quantity - 1, total:display.total - price});
                            setSum(sum-price);
                        } 
                    })
                    .catch(e => e.response? e.response.data.message: e)
                }>
                    &#10094;
                </td>
                <td className={styles.value}>{display.quantity}</td>
                <td className={styles.arrow} onClick={()=> TrolleyProductApi()
                    .post(productId)
                    .then(async()=>{setDisplay({quantity:display.quantity + 1, total:display.total + price});setSum(sum+price)})
                    .catch(e => e.response? e.response.data.message: e)
                }>
                    &#10095;
                </td>
            </tr>
            <tr className={styles.price}><td>£{display.total}</td></tr>
            <tr>
                <td>
                    <CustomModal action={<>remove</>} logo={"/cross.png"} handleSave={
                        ()=> TrolleyProductApi()
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
