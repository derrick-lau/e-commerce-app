import React from 'react'
import styles from './index.module.css'
import Tbody from '../../custom_table/Tbody';
import Iorder from '../../../abstractions/Iorder';
import WriteReviewModal from '../../review&reviewTable/WriteReviewModal';

const Order: React.FC<Iorder> = ({id, createAt, orderProducts}) =>  (
  
  <Tbody>
      <tr className={styles.id}><td>{id}</td></tr>
      <tr className={styles.createAt}><td>{createAt}</td></tr>
      <tr className={styles.products}>
        <>
          {orderProducts.length > 0?
            orderProducts.map((orderProduct)=> (
                <td key={orderProduct.id} className={styles.productName}>
                  {orderProduct.productName} x {orderProduct.quantity} <WriteReviewModal productId={orderProduct.id}/>
                </td>
            ))
          :
            null
          }
          </>
      </tr>
  </Tbody>
)




export default Order;
