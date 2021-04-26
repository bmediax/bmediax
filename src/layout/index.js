import React from 'react'
import Seo from '../components/Seo'
import '../styles/_base.scss'

const Layout = ({children, title}) => {
    return (
        <div>
            <Seo title={title} />
            {children}
        </div>
    )
}

export default Layout