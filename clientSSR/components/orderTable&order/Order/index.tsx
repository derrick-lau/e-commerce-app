import React from 'react'
import styles from './index.module.css'
import Tbody from '../../custom_table/Tbody';
import Iorder from '../../abstractions/Iorder';

const Order: React.FC<Iorder> = ({id, createAt, address, orderProducts}) =>  (
  
  <Tbody>
      <tr className={styles.id}>{id}</tr>
      <tr className={styles.createAt}>{createAt}</tr>
      <tr className={styles.quantity}>
        <>
          {orderProducts.length > 0?
            orderProducts.map((orderProduct)=> {
            return <td className={styles.productName}>{orderProduct.productName} x {orderProduct.quantity}</td>
            })
          :
            null
          }
          </>
      </tr>
      <tr className={styles.address}>{address}</tr>
  </Tbody>
)




export default Order;
