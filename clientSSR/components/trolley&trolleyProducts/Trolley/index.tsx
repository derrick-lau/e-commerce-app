import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import TrolleyProduct from '../TrolleyProduct';
import Custom_button from '../../Custom_button';
import TableLayout from '../../custom_table/TableLayout';
import Tr_Th from '../../custom_table/Tr_Th';
import Thead from '../../custom_table/Thead';
import Table_title from '../../custom_table/Table_title';
import { TrolleyProductApi } from '../../../api';
import Itrolley from '../../../abstractions/Itrolley';

const Trolley: React.FC = () => {

    const [trolley, setTrolley] = useState<Itrolley>({trolleyProducts:[]})
    const [sum, setSum] = useState<number>(0)

    useEffect(() => {
      let total = 0;
      trolley.trolleyProducts.forEach((TrolleyProduct) => {
        total += TrolleyProduct.total
      })
      setSum(total)
    },[trolley])

    useEffect(() => {
      const fetch = async () => {
        setTrolley(await TrolleyProductApi().getList());
      };
      fetch();
    }, []);
    
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
          {trolley.trolleyProducts.length > 0 ? trolley.trolleyProducts.map(props => {
            return(<TrolleyProduct key={props.productId} {...props} />)
          })
          :
            null
          }
        </TableLayout> 
        <div className={styles.end}>
          <div className={styles.total}>TOTAL: £{sum}</div>

            <Custom_button 
              onClick={()=> trolley.trolleyProducts.length > 0 ? window.location.pathname="/checkout":alert("Please add an product into your trolley first")} 
              style={{marginTop:"3vh", alignSelf: "flex-end"}}
            > 
              Go to checkout 
            </Custom_button>
        
        </div>
      </main> 
    )
}



export default Trolley;
