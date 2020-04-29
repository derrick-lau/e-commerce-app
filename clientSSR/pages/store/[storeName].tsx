import * as React from 'react'
import { NextPage } from 'next'
import styles from './store.module.css'
import Store from '../../components/store&product/Store';
import Istore from '../../components/abstractions/Istore';
import Layout from '../../components/Layout';

const shopPage: NextPage<Istore> = (props) => {
   
    return (
        <Layout>
            <main className={styles.homepage}>  
                <Store title= {props.title} 
                products= {props.products} />
            </main>
        </Layout>
    )
}

export default shopPage;


shopPage.getInitialProps = async ({query}) => {
    
    // ...fetch
    console.log(query.storeName.toString().toLowerCase());

    return {title:query.name.toString(), products:[{id:0, product_name:"", imageUrl:"", price:-1},{id:2, product_name:"", imageUrl:"", price:-1}]}
}
