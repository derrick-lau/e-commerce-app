import * as React from 'react'
import { NextPage } from 'next'
import Iproduct from '../../abstractions/Iproduct';
import ProductDetail from '../../components/ProductDetail';
import Layout from '../../components/Layout';
import ReviewTable from '../../components/review&reviewTable/ReviewTable';
import { ProductApi } from '../../api';

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

shopPage.getInitialProps = async ({query}) => (
    await ProductApi.get(query.productName.toString())
)

export default shopPage;
