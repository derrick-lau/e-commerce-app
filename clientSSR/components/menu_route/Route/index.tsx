import * as React from 'react'
import Link from 'next/link'
import styles from './index.module.css'

interface route {
    section: String;
    pageLink: String;
    imgLink: String;
}

const Route: React.FC<route> = ({section, pageLink, imgLink}) => (
    <section className={styles.route} >
        <picture style={{backgroundImage: `url(${imgLink})`}}>
            <Link href={{ pathname: `/${pageLink}`, }} ><a>{section}</a></Link>
        </picture>
    </section>
    
)

export default Route;
