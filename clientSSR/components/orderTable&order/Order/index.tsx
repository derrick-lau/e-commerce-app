import React from 'react'
import styles from './index.module.css'
import Tbody from '../../custom_table/Tbody';
import Iorder from '../../abstractions/Iorder';
import ModalForm from '../../CustomModal/ModalForm';

const Order: React.FC<Iorder> = ({id, createAt, orderProducts}) =>  (
  
  <Tbody>
      <tr className={styles.id}><td>{id}</td></tr>
      <tr className={styles.createAt}><td>{createAt}</td></tr>
      <tr className={styles.quantity}>
        <>
          {orderProducts.length > 0?
            orderProducts.map((orderProduct)=> {
              return <td key={orderProduct.id} className={styles.productName}>{orderProduct.productName} x {orderProduct.quantity}</td>
            })
          :
            null
          }
          </>
      </tr>
      <tr className={styles.address}><td>{<ModalForm logo={"/logo.png"} title={<>Write a review</>} handleSave={()=>{}}/>}</td></tr>
  </Tbody>
)




export default Order;
