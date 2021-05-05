import React from 'react';
import CoverTitle from '../components/CoverTitle';
import DesignSection from '../components/DesignSection';
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
                <DesignSection />
            </div>
        </Layout>
    )
}

export default portfolio;