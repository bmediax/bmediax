import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'

// Components
import SectionLayout from '../layout/SectionLayout';
import FullTxageModule from './modules/FullTxageModule';
import SectionLink from './SectionLink';

const RecentCaseSection = () => {
    const data = useStaticQuery(graphql`
    query recentProjectsQuery($filter: PrismicPortfolioFilterInput = {uid: {in: ["tedxpcc2018", "chicanxshop", "edutainment"]}}) {
        allPrismicPortfolio(filter: $filter) {
            edges {
            node {
                data {
                cover_title {
                    title {
                    text
                    }
                    name {
                    text
                    }
                    client {
                    text
                    }
                    background_image {
                    gatsbyImageData(width: 2000, placeholder: BLURRED)
                    }
                }
                overview {
                    short_description {
                    text
                    }
                    role {
                    text
                    }
                    short_tags {
                    text
                    }
                }
                }
                uid
            }
            }
        }
        }
    `)
    const recentProjectData = data.allPrismicPortfolio.edges
    return (
        <SectionLayout title="Recent Case Study" subtitle="Portfolio" label="darkerSection">
            {recentProjectData.map((portfolio, index) => (
                <FullTxageModule 
                    key={index} 
                    title={portfolio.node.data.cover_title[0].name.text} 
                    raw={portfolio.node.data.cover_title[0].client.text} 
                    cover={portfolio.node.data.cover_title[0].background_image.gatsbyImageData}
                    url={portfolio.node.uid}
                    work={portfolio.node.data.overview[0].short_tags.text}
                    shortDescr={portfolio.node.data.overview[0].short_description.text} 
                />
            ))}
            <SectionLink path="/portfolio" type="ghost">
                View All Case Study
            </SectionLink>
        </SectionLayout>
    );
};

export default RecentCaseSection;