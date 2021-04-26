import React from 'react'
import Layout from '../layout/index.js'
import Nav from '../components/Nav'
import Cover from '../components/Cover'

const homepage = () => {
    return (
        <Layout title="Homepage">
            <Nav />
            <Cover />
            <h1> Homepage </h1>
        </Layout>
    )
}

export default homepage;