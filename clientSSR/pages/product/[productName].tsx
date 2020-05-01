import * as React from 'react'
import { NextPage } from 'next'
import Layout from '../../components/Layout';
import Iproduct from '../../components/abstractions/Iproduct';
import ProductDetail from '../../components/ProductDetail';

const shopPage: NextPage<Iproduct> = (props) => (
    <Layout>
        <main>  
            <ProductDetail 
                id={props.id} 
                productName={props.productName} 
                price={props.price} 
                image={props.image}
                reviews={props.reviews}
            />
        </main>
    </Layout>
)

shopPage.getInitialProps = async ({query}) => {
    // ...fetch
    console.log(query)
    return {
                id: 1,
                image: "https://www.amd.com/system/files/2020-02/312735-ryzen-3900x-pib-right-facing-withfan-bg-1260x709.jpg",
                productName: "cpu1",
                price: 15.0,
                reviews: [{id:1, rate:5, content:"Hiiiiiii"}]
            }
}

export default shopPage;
