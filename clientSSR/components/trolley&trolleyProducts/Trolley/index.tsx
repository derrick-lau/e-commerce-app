import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import TrolleyProduct from '../TrolleyProduct';
import Custom_button from '../../Custom_button';
import ItrolleyProduct from '../../../abstractions/ItrolleyProduct';
import TableLayout from '../../custom_table/TableLayout';
import Tr_Th from '../../custom_table/Tr_Th';
import Thead from '../../custom_table/Thead';
import Table_title from '../../custom_table/Table_title';

const Trolley: React.FC = () => {

    const [trolley, setTrolley] = useState<ItrolleyProduct[]>([])
    const [sum, setSum] = useState<number>(0)

    useEffect(() => {
      let total = 0;
      trolley.forEach((TrolleyProduct) => {
        total += TrolleyProduct.total
      })
      setSum(total)
    })

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
      <main className={styles.tableMain}>
        <Table_title>Trolley</Table_title>
        <TableLayout>
          <Thead>
            <Tr_Th>Product</Tr_Th>
            <Tr_Th>Name</Tr_Th>
            <Tr_Th>Quantity</Tr_Th>
            <Tr_Th>Price</Tr_Th>
            <Tr_Th>Remove</Tr_Th>
          </Thead>
          {trolley.length > 0 ? trolley.map(props => {
            return(<TrolleyProduct key={props.productId} {...props} />)
          })
          :
            null
          }
        </TableLayout> 
        <div className={styles.end}>
          <div className={styles.total}>TOTAL: £{sum}</div>
          <Custom_button onClick={()=> window.location.pathname="/checkout"} style={{marginTop:"3vh", alignSelf: "flex-end"}}> 
            Go to checkout 
          </Custom_button>
        </div>
      </main> 
    )
}



export default Trolley;
