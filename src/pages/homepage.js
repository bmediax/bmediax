import React from 'react'
import Layout from '../layout/index.js'
import Nav from '../components/Nav'

const homepage = () => {
    return (
        <Layout title="Homepage">
            <Nav />
            <h1> Homepage </h1>
        </Layout>
    )
}

export default homepage;