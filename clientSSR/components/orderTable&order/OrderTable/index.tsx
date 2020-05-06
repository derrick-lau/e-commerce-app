import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import TableLayout from '../../custom_table/TableLayout';
import Tr_Th from '../../custom_table/Tr_Th';
import Thead from '../../custom_table/Thead';
import Order from '../Order';
import Table_title from '../../custom_table/Table_title';
import { OrderApi } from '../../../api';
import IorderList from '../../../abstractions/IorderList';

const OrderTable: React.FC = () => {

    const [orderTable, setOrderTable] = useState<IorderList>({orders:[]})

    useEffect(() => {
      const fetch = async () => {
        setOrderTable(await OrderApi().getList());
      };
      fetch();
    }, []);
    
    return (
      <main className={styles.tableMain}>
        <Table_title>Order</Table_title>
        <TableLayout>
          <Thead>
            <Tr_Th>Order ID</Tr_Th>
            <Tr_Th >Created Date</Tr_Th>
            <Tr_Th>Products</Tr_Th>
            <Tr_Th></Tr_Th>
          </Thead>
          {orderTable.orders.length > 0 ? orderTable.orders.map(props => {
            return(<Order key={props.id} {...props} />)
          })
          :
            null
          }
        </TableLayout> 
      </main> 
    )
}



export default OrderTable;
