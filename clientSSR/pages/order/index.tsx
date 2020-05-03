import * as React from 'react'
import { NextPage } from 'next'
import Layout from '../../components/Layout'
import OrderTable from '../../components/orderTable&order/OrderTable'

const orderPage: NextPage = () => (
  <Layout>
    <OrderTable/>
  </Layout>
)

export default orderPage
