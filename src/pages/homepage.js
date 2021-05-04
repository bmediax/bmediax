import React from 'react'
import Layout from '../layout/index.js'
import Cover from '../components/Cover'
import RecentProjectsSection from '../components/RecentProjectsSection.js'
import AwardsSection from '../components/AwardsSection.js'

const homepage = () => {
    return (
        <Layout title="Homepage">
            <Cover />
            <RecentProjectsSection />
            <AwardsSection />
        </Layout>
    )
}

export default homepage;