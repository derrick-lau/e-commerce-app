import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import Link from 'next/link'


const Header: React.FC = () => {
    const [isLoggedin, setisLoggedin] = useState(false)

    useEffect(() => {
        if(window.sessionStorage.getItem('token')) {
            setisLoggedin(true)
        }
    }, [])

    const handleLogout = () => {
        window.sessionStorage.clear()
        setisLoggedin(false)
    }
    
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
                {isLoggedin ? 
                    <>
                    <Link href={'/cart'} ><a className={styles.route}> Trolley img </a></Link>
                    <Link href={'/wishList'} ><a className={styles.route}> Wish List img </a></Link>
                    <Link href={'/login'} ><a className={styles.route} onClick={handleLogout}>Log out</a>
                    </Link>
                    </>
                : 
                    <Link href={'/login'} ><a className={styles.route}>Log in</a></Link>
                }
            </div>
        </header> 
    )
}

export default Header;