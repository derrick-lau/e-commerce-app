import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import TableLayout from '../../custom_table/TableLayout';
import Tr_Th from '../../custom_table/Tr_Th';
import Thead from '../../custom_table/Thead';
import Iproduct from '../../../abstractions/Iproduct';
import WishListProduct from '../WishListProduct';
import Table_title from '../../custom_table/Table_title';

const WishList: React.FC = () => {

    const [wishList, setWishList] = useState<Iproduct[]>([])

    useEffect(() => {
      setWishList([
            {
            id:1, 
            productName:"Some product",
            image:"https://www.amd.com/system/files/2020-02/312735-ryzen-3900x-pib-right-facing-withfan-bg-1260x709.jpg", 
            price:20.0
        },{
          id:2, 
          productName:"Some product2",
          image:"https://www.amd.com/system/files/2020-02/312735-ryzen-3900x-pib-right-facing-withfan-bg-1260x709.jpg", 
          price:30.0
        }
    ])
    }, [])
    
    return (
      <main className={styles.tableMain}>
        <Table_title>Wish List</Table_title>
        <TableLayout>
          <Thead>
            <Tr_Th>Product</Tr_Th>
            <Tr_Th>Name</Tr_Th>
            <Tr_Th>Price</Tr_Th>
            <Tr_Th>Remove</Tr_Th>
          </Thead>
          {wishList.length > 0 ? wishList.map(props => {
            return(<WishListProduct key={props.id} {...props} />)
          })
          :
            null
          }
        </TableLayout> 
      </main> 
    )
}



export default WishList;
