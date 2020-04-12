import * as React from 'react'
import { NextPage } from 'next'
import styles from './store.module.css'
import StoreProducts from '../../components/store&product/Store';

const shopPage: NextPage = () => (
        <main className={styles.homepage}>  
            <StoreProducts />
        </main>
    )
export default shopPage;


