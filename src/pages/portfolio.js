import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../layout'
import SectionPageLayout from "../layout/SectionPageLayout";
import CTACardModule from '../components/modules/CTACardModule';

const portfolio = ({ data }) => {
    if (!data) return null
    const document = data.allPrismicPortfolio.edges
    return (
        <Layout title="Portfolio">
            <SectionPageLayout title="Portfolio" label="page">
                <div className="pageColumnLayout grid-three sectionMaxWidth">
                {document.map((portfolio, index) => (
                    <CTACardModule isLight key={index}
                        title={portfolio.node.data.cover_title[0].name.text} 
                        raw={portfolio.node.data.cover_title[0].client.text} 
                        cover={portfolio.node.data.cover_title[0].background_image.localFile}
                        url={portfolio.node.uid}
                        work={portfolio.node.data.overview[0].short_tags.text}
                        shortDescr={portfolio.node.data.overview[0].short_description.text} />
                ))}
                </div>
            </SectionPageLayout>
        </Layout>
    )
}

export default portfolio;

export const query = graphql`
    query portfolioQuery {
        allPrismicPortfolio {
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
                                            width: 1000
                                            placeholder: DOMINANT_COLOR
                                            quality: 100
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
`