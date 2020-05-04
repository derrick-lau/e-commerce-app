import * as React from 'react'
import { NextPage } from 'next'
import Layout from '../../components/Layout'
import WishList from '../../components/wishList&wishListProduct/WishList'

const WishListPage: NextPage = () => (
  <Layout>
    <WishList/>
  </Layout>
)

export default WishListPage
