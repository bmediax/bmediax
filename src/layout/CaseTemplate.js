import CoverTitle from "../components/CoverTitle";
import DesignSection from "../components/DesignSection";
import ImageSection from "../components/ImageSection";
import Layout from "../layout";
import NextProjectSection from "../components/NextProjectSection";
import OverviewSection from "../components/OverviewSection";
import PortfolioTitle from "../components/PortfolioTitle";
import React from "react";
import ResultsSection from "../components/ResultsSection";
// import * as portfolioStyles from '../styles/portfolio.module.scss'

const CaseTemplate = ({ data, pageTitle, uid }) => {
  return (
    <>
      <Layout
        title={pageTitle}
        descr={data.cover_title[0].title.text}
        imgSrc={data.cover_title[0].background_image.url}
        uid={uid}
      >
        <PortfolioTitle coverData={data.cover_title[0]} />
        <CoverTitle coverData={data.cover_title[0]} />
        <OverviewSection
          overviewData={data.overview[0]}
          projectLinks={data.project_links}
        />
        <ImageSection image={data.design_image} />
        <DesignSection {...data} />
        <ImageSection image={data.results_image} />
        <ResultsSection {...data} />
        <NextProjectSection title={pageTitle} />
      </Layout>
    </>
  );
};

export default CaseTemplate;
