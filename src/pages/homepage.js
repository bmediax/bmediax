import React from 'react'
import Layout from '../layout/index.js'
import Cover from '../components/Cover'

const homepage = () => {
    return (
        <Layout title="Homepage">
            <Cover />
            <h1> Homepage </h1>
        </Layout>
    )
}

export default homepage;