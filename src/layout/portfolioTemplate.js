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

const portfolioTemplate = ({ data }) => {
    return (
        <Layout title="Portfolio">
            <div>
                <CoverTitle coverData={data.cover_title[0]} />
                <LegionBar />
                <OverviewSection overviewData={data.overview[0]}/>
                <ImageSection />
                <DesignSection designData={data.design[0]} />
                <ImageSection />
                <ResultsSection resultsData={data.results[0]} />
            </div>
            <NextProjectSection nextProjectData={data.next_project} />
        </Layout>
    )
}

export default portfolioTemplate;