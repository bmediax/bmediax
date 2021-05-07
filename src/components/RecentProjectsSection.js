import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import SectionLayout from '../layout/SectionLayout';
import * as styles from '../styles/homepage.module.scss'
import CTACardModule from './modules/CTACardModule';
// import { portfolioData } from '../data/portfolioData'

const RecentProjectsSection = () => {
    const data = useStaticQuery(graphql`
    query recentProjectsQuery($filter: PrismicPortfolioFilterInput = {uid: {in: ["chicanxshop", "reikoforpcc", "edutainment"]}}) {
        allPrismicPortfolio(filter: $filter) {
            edges {
                node {
                    data {
                        cover_title {
                            title {
                                text
                            }
                            client {
                                text
                            }
                            background_image {
                                localFile {
                                    childImageSharp {
                                        gatsbyImageData(width: 350, placeholder: DOMINANT_COLOR)
                                    }
                                }
                            }
                        }
                        overview {
                            description {
                                text
                            }
                            role {
                                text
                            }
                            work {
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
    console.log(recentProjectData)
    return (
        <SectionLayout label={styles.recentProjects} title="Recent Projects" subtitle="Portfolio">
            <div className={styles.cardWrapper}>
                {recentProjectData.map((portfolio, index) => (
                    <CTACardModule key={index} 
                        title={portfolio.node.data.cover_title[0].client.text} 
                        raw={portfolio.node.data.cover_title[0].client.text} 
                        cover={portfolio.node.data.cover_title[0].background_image.localFile}
                        url={portfolio.node.uid}
                        work={portfolio.node.data.overview[0].work.text}
                        shortDescr={portfolio.node.data.overview[0].description.text} />
                ))}
            </div>
        </SectionLayout>
    );
};

export default RecentProjectsSection;