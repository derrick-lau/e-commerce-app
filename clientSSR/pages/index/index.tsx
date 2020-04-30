import * as React from 'react'
import { NextPage } from 'next'
import styles from './index.module.css'
import Menu from '../../components/menu&route/Menu'
import Layout from '../../components/Layout'
import Imenu from '../../components/abstractions/Imenu'

const IndexPage: NextPage<Imenu> = (props) => (

  <Layout>
    <main className={styles.homepage}>
      <Menu menu={props.menu}/>
    </main>
  </Layout>
)


IndexPage.getInitialProps = async () => {
    
  // ...fetch

  return { menu:[
    {
        section: 'Processors',
        imgLink: '',
        id: 1,
        pageLink: 'store/processors'
    },
    {
        section: 'Motherboards',
        imgLink: '',
        id: 2,
        pageLink: 'store/motherboards'
    },
    {
        section: 'Memory',
        imgLink: '',
        id: 3,
        pageLink: 'store/memory'
    },
    {
        section: 'Graphics Card',
        imgLink: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/graphic-cards/rtx-2080-super/geforce-rtx-2080-super-gallery-thumbnail-d-D.png',
        id: 4,
        pageLink: 'store/graphics'
    },
    {
        section: 'Cases and Coolings',
        imgLink: '',
        id: 5,
        pageLink: 'store/cases&coolings'
    }
  ]}
}

export default IndexPage
