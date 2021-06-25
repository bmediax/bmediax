import React from 'react';
import Layout from '../layout'
import CoverTitle from '../components/CoverTitle';
import DesignSection from '../components/DesignSection';
import ImageSection from '../components/ImageSection';
import LegionBar from '../components/modules/LegionBar';
import NextProjectSection from '../components/NextProjectSection';
import OverviewSection from '../components/OverviewSection';
import PortfolioTitle from '../components/PortfolioTitle';
import ResultsSection from '../components/ResultsSection';
// import * as portfolioStyles from '../styles/portfolio.module.scss'

const PortfolioTemplate = ({ data, pageTitle }) => {
    console.log(data)
    return (
        <>
            <Layout title={pageTitle} descr={data.cover_title[0].title.text}>
                <PortfolioTitle coverData={data.cover_title[0]}/>
                <LegionBar />
                <CoverTitle coverData={data.cover_title[0]} />
                <OverviewSection overviewData={data.overview[0]} projectLinks={data.project_links} />
                <ImageSection image={data.design_image} />
                <DesignSection {...data} />
                <ImageSection image={data.results_image} />
                <ResultsSection {...data} />
                <NextProjectSection title={pageTitle} />
            </Layout>
        </>
    )
}

export default PortfolioTemplate;