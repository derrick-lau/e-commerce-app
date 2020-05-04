import * as React from 'react'
import { NextPage } from 'next'
import Iproduct from '../../components/abstractions/Iproduct';
import ProductDetail from '../../components/ProductDetail';
import Layout from '../../components/Layout';
import ReviewTable from '../../components/review&reviewTable/ReviewTable';

const shopPage: NextPage<Iproduct> = (props) => (
    <Layout>
        <main style={{display:"flex" , flexDirection:"column"}}>  
            <ProductDetail 
                id={props.id} 
                productName={props.productName} 
                description={props.description}
                price={props.price} 
                image={props.image}
            />
            {props.reviews?(
                <ReviewTable reviews={props.reviews}/>)
            :
                null
            }
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
                description:"desription",
                reviews: [{id:1, rate:5, content:"Hiiiiiii", name:"user1"},{id:1, rate:5, content:"Hiiiiiii", name:"user1"}]
            }
}

export default shopPage;
