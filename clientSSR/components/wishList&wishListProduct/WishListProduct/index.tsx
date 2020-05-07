import React from 'react'
import styles from './index.module.css'
import CustomModal from '../../CustomModal/Confirmation';
import Tbody from '../../custom_table/Tbody';
import { WishListApi } from '../../../api';
import IwishListProduct from '../../../abstractions/IwishListProduct';
import Link from 'next/link';

const WishListProduct: React.FC<IwishListProduct> = ({productId, productName, image, price}) => {

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
            <tr className={styles.price}><td>£{price}</td></tr>
            <tr>
                <td>
                    <CustomModal 
                        action={<>remove</>} 
                        logo={"/cross.png"}
                        handleSave={() => 
                            WishListApi()
                            .delete(productId)
                            .catch(e=>alert(e))
                            .finally(()=>window.location.pathname="/wishList")
                        } 
                    />
                </td>
            </tr>
        </Tbody>
    )
}

export default WishListProduct;
