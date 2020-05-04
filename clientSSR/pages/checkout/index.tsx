import * as React from 'react'
import { NextPage } from 'next'
import Checkout from '../../components/Checkout'
import Layout from '../../components/Layout'
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const checkoutPage: NextPage = () => (
  <Layout>
    <Elements stripe={loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh')}>
      <Checkout/>
    </Elements>
  </Layout>
)

export default checkoutPage
