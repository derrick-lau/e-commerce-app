import * as React from 'react'
import { NextPage } from 'next'
import styles from './index.module.css'
import Menu from '../components/menu'

const IndexPage: NextPage = () => (
  <main className={styles.homepage}>
    <Menu/>
  </main>
)

export default IndexPage
