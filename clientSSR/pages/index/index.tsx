import * as React from 'react'
import { NextPage } from 'next'
import styles from './index.module.css'
import Menu from '../../components/menu&route/Menu'

import Imenu from '../../abstractions/Imenu'
import Layout from '../../components/Layout'
import { StoreApi } from '../../api'

const IndexPage: NextPage<Imenu> = (props) => (

  <Layout>
      <main className={styles.homepage}>
        <Menu stores={props.stores}/>
      </main>
  </Layout>
)


IndexPage.getInitialProps = async () => {
    
  try {

    return await StoreApi().getList()

  } catch(e) {
    
    return { stores:[{storeName: e.response? e.response.data.message: e.toString(),image: '',id: 1,}]}
  }
}

export default IndexPage
