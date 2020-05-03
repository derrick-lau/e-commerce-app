import * as React from 'react'
import { NextPage } from 'next'
import Checkout from '../../components/Checkout'
import Layout from '../../components/Layout'

const checkoutPage: NextPage = () => (
  <Layout>
    <Checkout/>
  </Layout>
)

export default checkoutPage
