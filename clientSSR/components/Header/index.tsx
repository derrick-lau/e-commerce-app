import React from 'react'
import styles from './index.module.css'
import Link from 'next/link'


const Header: React.FC = () => {

    return (
        <header className={styles.header}>
            <Link href={'/'} >
                <a className={styles.logo}>
                    Logo
                </a>
            </Link>
            <div className={styles.routes}>
                <Link href={'/'} >
                    <a className={styles.route}>
                        Store
                    </a>
                </Link>
                <Link href={'/contact'} >
                    <a className={styles.route}>
                        Contact
                    </a>
                </Link>
                {true ? 
                    <Link href={'/sign_in_up'} >
                        <a className={styles.route}>
                            Sign in
                        </a>
                    </Link>
                : 
                    <Link href={'/sign_in_up'} >
                        <a className={styles.route}>
                            Sign out
                        </a>
                    </Link>
                }
                {true ? 
                    <Link href={'/cart'} ><a className={styles.route}> Cart </a></Link>
                : 
                    null
                }
            </div>
        </header> 
    )
}

export default Header;