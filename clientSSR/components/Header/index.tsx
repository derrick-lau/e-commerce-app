import React from 'react'
import styles from './index.module.css'
import Link from 'next/link'

interface Iheader {

}
const Header: React.FC<Iheader> = () => {

    return (
        <header className={styles.aaa}>
            <Link href={'/'} >
                <a className={styles.Header}>
                    Logooo
                </a>
            </Link>
            <div className={styles.route_container}>
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
                <Link href={'/sign_in_up'} >
                    {/* onClick = { ()=>{dispatch(setIsSignedInFalse); window.sessionStorage.clear();} } */}
                    <a className={styles.route}>
                    Sign out
                    </a>
                </Link>
                
                <Link href={'/cart'} >
                    <a className={styles.route}>
                        Cart
                    </a>
                </Link>
            </div>
        </header> 
    )
}

export default Header;