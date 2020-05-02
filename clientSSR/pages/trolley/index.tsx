import * as React from 'react'
import { NextPage } from 'next'
import Layout from '../../components/Layout'
import Trolley from '../../components/trolley&trolleyProducts/Trolley'

const IndexPage: NextPage = () => (
  <Layout>
    <main>
      <Trolley/>
    </main>
  </Layout>
)

export default IndexPage
