import React from 'react'
import Layout from '../layout/index.js'
import Cover from '../components/Cover'
import RecentProjectsSection from '../components/RecentProjectsSection.js'

const homepage = () => {
    return (
        <Layout title="Homepage">
            <Cover />
            <RecentProjectsSection />
        </Layout>
    )
}

export default homepage;