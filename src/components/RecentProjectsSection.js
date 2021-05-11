import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import SectionLayout from '../layout/SectionLayout';
import * as styles from '../styles/homepage.module.scss'
import CTACardModule from './modules/CTACardModule';
// import { portfolioData } from '../data/portfolioData'

const RecentProjectsSection = () => {
    const data = useStaticQuery(graphql`
    query recentProjectsQuery($filter: PrismicPortfolioFilterInput = {uid: {in: ["chicanxshop", "tedxpcc2018", "edutainment"]}}) {
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
                                localFile {
                                    childImageSharp {
                                        gatsbyImageData(
                                            width: 350
                                            placeholder: DOMINANT_COLOR
                                            quality: 75
                                        )
                                    }
                                }
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
        <SectionLayout label={styles.recentProjects} title="Recent Projects" subtitle="Portfolio">
            <div className={styles.cardWrapper}>
                {recentProjectData.map((portfolio, index) => (
                    <CTACardModule key={index} 
                        title={portfolio.node.data.cover_title[0].name.text} 
                        raw={portfolio.node.data.cover_title[0].client.text} 
                        cover={portfolio.node.data.cover_title[0].background_image.localFile}
                        url={portfolio.node.uid}
                        work={portfolio.node.data.overview[0].short_tags.text}
                        shortDescr={portfolio.node.data.overview[0].short_description.text} />
                ))}
            </div>
        </SectionLayout>
    );
};

export default RecentProjectsSection;