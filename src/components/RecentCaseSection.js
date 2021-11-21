// Components
import SectionLayout from '../layout/SectionLayout';
import SectionLink from './SectionLink';
import FullTxageModule from './modules/FullTxageModule';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';


const RecentCaseSection = () => {
    const data = useStaticQuery(graphql`
      query recentProjectsQuery(
        $filter: PrismicPortfolioFilterInput = {
          uid: { in: ["reikoforpcc", "chicanxshop", "tedxpcc2018"] }
        }
      ) {
        allPrismicPortfolio(filter: $filter) {
          nodes {
            url
            uid
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
          }
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
    `);
    const recentProjectData = data.allPrismicPortfolio.nodes
    return (
        <SectionLayout title="Recent Case Study" subtitle="Portfolio" label="darkerSection">
            {recentProjectData.map((portfolio, index) => (
                <FullTxageModule 
                    key={index} 
                    title={portfolio.data.cover_title[0].name.text} 
                    raw={portfolio.data.cover_title[0].client.text} 
                    cover={portfolio.data.cover_title[0].background_image.gatsbyImageData}
                    url={`/casestudy/${portfolio.uid}`}
                    work={portfolio.data.overview[0].short_tags.text}
                    shortDescr={portfolio.data.overview[0].short_description.text} 
                />
            ))}
            <SectionLink path="/portfolio" type="ghost">
                View All Case Study
            </SectionLink>
        </SectionLayout>
    );
};

export default RecentCaseSection;