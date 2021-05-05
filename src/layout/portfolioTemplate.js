import React from 'react';
import CoverTitle from '../components/CoverTitle';
import DesignSection from '../components/DesignSection';
import ImageSection from '../components/ImageSection';
import LegionBar from '../components/modules/LegionBar';
import NextProjectSection from '../components/NextProjectSection';
import OverviewSection from '../components/OverviewSection';
import ResultsSection from '../components/ResultsSection';
import Layout from '../layout'
// import * as portfolioStyles from '../styles/portfolio.module.scss'

const portfolioTemplate = () => {
    return (
        <Layout title="Portfolio">
            <div>
                <CoverTitle />
                <LegionBar />
                <OverviewSection />
                <ImageSection />
                <DesignSection />
                <ImageSection />
                <ResultsSection />
            </div>
            <NextProjectSection />
        </Layout>
    )
}

export default portfolioTemplate;