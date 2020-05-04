import * as React from 'react'
import { NextPage } from 'next'
import Store from '../../components/store&product/Store';
import Istore from '../../abstractions/Istore';
import Layout from '../../components/Layout';

const shopPage: NextPage<Istore> = (props) => (
    <Layout>
        <main>  
            <Store storeName= {props.storeName} products= {props.products} />
        </main>
    </Layout>
)

shopPage.getInitialProps = async ({query}) => {
    // ...fetch
    console.log(query)
    return {
        storeName: "CPU" ,
        products: [
            {
                id: 1,
                image: "https://www.amd.com/system/files/2020-02/312735-ryzen-3900x-pib-right-facing-withfan-bg-1260x709.jpg",
                productName: "cpu1",
                price: 15.0,
                isInStock: true,
                reviews: []
            },{
                id: 2,
                image: "https://www.amd.com/system/files/2020-02/312735-ryzen-3900x-pib-right-facing-withfan-bg-1260x709.jpg",
                productName: "cpu2",
                price: 30.0,
                isInStock: true,
                reviews: []
            },{
                id: 3,
                image: "https://www.amd.com/system/files/2020-02/312735-ryzen-3900x-pib-right-facing-withfan-bg-1260x709.jpg",
                productName: "cpu3",
                price: 30.0,
                isInStock: true,
                reviews: []
            },{
                id: 4,
                image: "https://www.amd.com/system/files/2020-02/312735-ryzen-3900x-pib-right-facing-withfan-bg-1260x709.jpg",
                productName: "cpu4",
                price: 30.0,
                isInStock: true,
                reviews: []
            },{
                id: 5,
                image: "https://www.amd.com/system/files/2020-02/312735-ryzen-3900x-pib-right-facing-withfan-bg-1260x709.jpg",
                productName: "cpu5",
                price: 30.0,
                isInStock: true,
                reviews: []
            },
        ]
    }
}

export default shopPage;
