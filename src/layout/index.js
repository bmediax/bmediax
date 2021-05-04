import React from 'react'
import Nav from '../components/Nav'
import Seo from '../components/Seo'
import FriendsSection from '../components/FriendsSection.js'
import WorkSection from '../components/WorkSection'

import '../styles/reset.css'
import '../styles/_base.scss'

const Layout = ({children, title}) => {
    return (
        <div>
            <Seo title={title} />
            <Nav />
            {children}
            <FriendsSection />
            <WorkSection />
        </div>
    )
}

export default Layout