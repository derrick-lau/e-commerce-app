import * as React from 'react'
import { NextPage } from 'next'
import Store from '../../components/store&product/Store';
import Istore from '../../abstractions/Istore';
import Layout from '../../components/Layout';
import { StoreApi } from '../../api';

const shopPage: NextPage<Istore> = (props) => (
    <Layout>
        <main>  
            <Store storeName= {props.storeName} products= {props.products} />
        </main>
    </Layout>
)

shopPage.getInitialProps = async ({query}) => {
    try {
        return await StoreApi().get(query.storeName.toString())
    } catch(e) {
        return {storeName: e.response? e.response.data.message: e.toString() ,products: []}
    }
}

export default shopPage;
