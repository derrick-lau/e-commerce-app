import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import TableLayout from '../../custom_table/TableLayout';
import Tr_Th from '../../custom_table/Tr_Th';
import Thead from '../../custom_table/Thead';
import WishListProduct from '../WishListProduct';
import Table_title from '../../custom_table/Table_title';
import { WishListApi} from '../../../api';
import IwishList from '../../../abstractions/IwishList';

const WishList: React.FC = () => {

    const [wishList, setWishList] = useState<IwishList>({wishListProducts:[]})


    useEffect(() => {
      const fetch = async () => {
        setWishList(await WishListApi().getList());
      };
      fetch();
    }, []);
    
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
          {wishList.wishListProducts.length > 0 ? wishList.wishListProducts.map(props => {
            return(<WishListProduct key={props.productId} {...props} />)
          })
          :
            null
          }
        </TableLayout> 
      </main> 
    )
}



export default WishList;
