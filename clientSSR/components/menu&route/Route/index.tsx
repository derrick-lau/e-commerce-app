
import Link from 'next/link'
import styles from './index.module.css'
import Iroute from '../../../abstractions/Iroute';

const Route: React.FC<Iroute> = ({id, storeName, image}) => (
    <section id={id.toString()} className={styles.route} >
        <picture style={{backgroundImage: `url(${image})`}}>
            <Link href={`/store/${storeName}?id=${id}`} >
                <a href={`/store/${storeName}?id=${id}`}>{storeName}</a>
            </Link>
        </picture>
    </section>
)

export default Route;



