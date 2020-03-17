import * as React from 'react'
import Link from 'next/link'
import styles from './index.module.css'
import { route } from '../../interfaces';

const Route: React.FC<route> = ({section, pageLink, imgLink}) => (
    <section className={styles.route} >
        <image style={{backgroundImage: `url(${imgLink})`}}>
            <Link href={`/${pageLink}`}><a>{section}</a></Link>
        </image>
    </section>
    
)

export default Route;
