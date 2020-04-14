import * as React from 'react'
import { NextPage } from 'next'
import styles from './index.module.css'
import Menu from '../components/menu&route/Menu'
import Layout from '../components/Layout'

const IndexPage: NextPage = () => (

  <Layout>
    <main className={styles.homepage}>
      <Menu/>
    </main>
  </Layout>
)

export default IndexPage
