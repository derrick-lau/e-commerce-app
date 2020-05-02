import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import TrolleyProduct from '../TrolleyProduct';
import Custom_button from '../../Custom_button';

const Store: React.FC = () => {

    const [trolley, setTrolley] = useState([{productId:0, productName:"No product", image:"No product", quantity:0, total:0}])
    let sum = 0
    useEffect(() => {
        setTrolley([
            {
            productId:1, 
            productName:"Some product",
            image:"https://www.amd.com/system/files/2020-02/312735-ryzen-3900x-pib-right-facing-withfan-bg-1260x709.jpg", 
            quantity:2, 
            total:30.0
        },{
            productId:2, 
            productName:"Some product",
            image:"https://www.amd.com/system/files/2020-02/312735-ryzen-3900x-pib-right-facing-withfan-bg-1260x709.jpg", 
            quantity:3, 
            total:65.0 
        }
    ])

    }, [])
    
    return (
        <div className={styles.checkout_page}>
        <div className={styles.checkout_header}>
          <div className={styles.header_block}>
            <span>Product</span>
          </div>
          <div className={styles.header_block}>
            <span>Name</span>
          </div>
          <div className={styles.header_block}>
            <span>Quantity</span>
          </div>
          <div className={styles.header_block}>
            <span>Price</span>
          </div>
          <div className={styles.header_block}>
            <span>Remove</span>
          </div>
        </div>
        {trolley.map(props => {
            sum += props.total
            return(<TrolleyProduct key={props.productId} {...props} />)
        })}
        <div className={styles.total}>TOTAL: £{sum}</div>
        <Custom_button style={{marginTop:"3vh", alignSelf: "flex-end"}}>Checkout</Custom_button>
      </div>  
    )
}



export default Store;
