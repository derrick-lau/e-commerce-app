import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import TableLayout from '../../custom_table/TableLayout';
import Tr_Th from '../../custom_table/Tr_Th';
import Thead from '../../custom_table/Thead';
import Iorder from '../../abstractions/Iorder';
import Order from '../Order';

const OrderTable: React.FC = () => {

    const [trolley, setTrolley] = useState<Iorder[]>([])

    useEffect(() => {
        setTrolley([{
          id:1,
          createAt:"2029292-22882",
          address:"adress",
          orderProducts:[{
            id:1, 
            productName:"111Some product",
            image:"https://www.amd.com/system/files/2020-02/312735-ryzen-3900x-pib-right-facing-withfan-bg-1260x709.jpg", 
            quantity:2, 
            price:30.0,
            total:60.0
        },{
            id:2, 
            productName:"222Some product",
            image:"https://www.amd.com/system/files/2020-02/312735-ryzen-3900x-pib-right-facing-withfan-bg-1260x709.jpg", 
            quantity:3, 
            price:65.0 
            
        }]
      }])
    }, [])
    
    return (
      <main className={styles.tableMain}>
        <TableLayout>
          <Thead>
            <Tr_Th>Order ID</Tr_Th>
            <Tr_Th>Created Date</Tr_Th>
            <Tr_Th>Products</Tr_Th>
            <Tr_Th>Address</Tr_Th>
          </Thead>
          {trolley.length > 0 ? trolley.map(props => {
            return(<Order key={props.id} {...props} />)
          })
          :
            <> No product in the trolley</>
          }
        </TableLayout> 
      </main> 
    )
}



export default OrderTable;
