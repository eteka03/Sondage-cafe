import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import style from './Layout.module.scss'

const Layout = ({children}) => {
    return (
        <div className={style.siteContainer}>
            <Header />
            <main className={style.siteMain}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
