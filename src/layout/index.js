import React from 'react'
import Seo from '../components/Seo'
import '../styles/_base.scss'

const Layout = ({children, title}) => {
    return (
        <React.Fragment>
            <Seo title={title} />
            {children}
        </React.Fragment>
    )
}

export default Layout