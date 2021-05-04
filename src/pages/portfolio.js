import React from 'react';
import CoverTitle from '../components/CoverTitle';
import LegionBar from '../components/modules/LegionBar';
import OverviewSection from '../components/OverviewSection';
import Layout from '../layout'
// import * as portfolioStyles from '../styles/portfolio.module.scss'

const portfolio = () => {
    return (
        <Layout title="Portfolio">
            <div>
                <CoverTitle />
                <LegionBar />
                <OverviewSection />
            </div>
            {/* <h1> Portfolio </h1> */}
        </Layout>
    )
}

export default portfolio;