import * as React from 'react'
import { NextPage } from 'next'
import Layout from '../../components/Layout'
import Sign_in_up from '../../components/Sign_in_up'

const IndexPage: NextPage = () => (
  <Layout>
      <Sign_in_up />
  </Layout>
)

export default IndexPage
