import React from 'react'
import Header from "../Header/Header"
import Now from '../Now/Now'
import Highlight from '../Highlight/Highlight'
import Forcast from '../Forcast/Forcast'
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
            </section>
        </div>
    )
}

export default Layout