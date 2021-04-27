import React from 'react'
import Nav from '../components/Nav'
import Seo from '../components/Seo'
import '../styles/reset.css'
import '../styles/_base.scss'

const Layout = ({children, title}) => {
    return (
        <div>
            <Seo title={title} />
            <Nav />
            {children}
        </div>
    )
}

export default Layout