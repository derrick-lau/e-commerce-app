import * as React from 'react'
import { NextPage } from 'next'
import styles from './index.module.css'
import Menu from '../../components/menu&route/Menu'

import Imenu from '../../components/abstractions/Imenu'
import Layout from '../../components/Layout'

const IndexPage: NextPage<Imenu> = (props) => (

  <Layout>
      <main className={styles.homepage}>
        <Menu menu={props.menu}/>
      </main>
  </Layout>
)


IndexPage.getInitialProps = async () => {
    
  // ...fetch

  return { 
    menu:[
    {
        storeName: 'Processors',
        image: '',
        id: 1,
    },
    {
      storeName: 'Motherboards',
      image: '',
      id: 2,
    },
    {
      storeName: 'Memory',
      image: '',
      id: 3,
    },
    {
      storeName: 'Graphics Card',
      image: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/graphic-cards/rtx-2080-super/geforce-rtx-2080-super-gallery-thumbnail-d-D.png',
      id: 4,
    },
    {
      storeName: 'Cases and Coolings',
      image: '',
      id: 5,
    }
  ]}
}

export default IndexPage
