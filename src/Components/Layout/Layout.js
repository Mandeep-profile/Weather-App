import React from 'react'
import Header from "../Header/Header"
import Now from '../Now/Now'
import Highlight from '../Highlight/Highlight'
import Forcast from '../Forcast/Forcast'
import Today from '../Today/Today'
import Footer from "../Footer/Footer"
import "./Layout.css"

const Layout = () => {
    return (
        <div className='layout-main'>
            <main className='main'>
                <Header />
            </main>
            <section className='leftContent'>
                <Now />
                <Highlight />
            </section>
            <section className='rightContent'>
                <Forcast />
                <Today />
            </section>
            <Footer />
        </div>
    )
}

export default Layout