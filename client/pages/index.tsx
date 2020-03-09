import * as React from 'react'
import Link from 'next/link'
import { NextPage } from 'next'
import styles from './index.module.css'

const IndexPage: NextPage = () => (
  <main className={styles.homepage}>
      <section>
        <Link href="/cpu"><a>Processors</a></Link>
      </section>
      <section>
        <Link href="/cpu"><a>Motherboards</a></Link>
      </section>
      <section>
        <Link href="/cpu"><a>Memory</a></Link>
      </section>
      <section>
        <Link href="/cpu"><a>Graphics Card</a></Link>
      </section>
      <section>
        <Link href="/cpu"><a>Cases</a></Link>
      </section>
  </main>
)

export default IndexPage
