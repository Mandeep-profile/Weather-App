import React from 'react'
import Header from "../Header/Header"
import Now from '../Now/Now'
import Highlight from '../Highlight/Highlight'
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
        </div>
    )
}

export default Layout