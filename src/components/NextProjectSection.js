import * as homeStyles from '../styles/homepage.module.scss';

import { graphql, useStaticQuery } from 'gatsby';

import CTACardModule from './modules/CTACardModule';
import React from 'react';
import SectionLayout from '../layout/SectionLayout';

// import { Link } from 'gatsby'
// import * as portfolioStyles from '../styles/portfolio.module.scss'
// import { BsArrowRight } from 'react-icons/bs'

const NextProjectSection = ({ title }) => {
    const data = useStaticQuery(graphql`
      query nextQuery {
        allPrismicPortfolio(filter: { data: { is_displayed: { eq: true } } }) {
          nodes {
            uid
            data {
              is_displayed
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
                  gatsbyImageData(width: 2000, placeholder: DOMINANT_COLOR)
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
                    gatsbyImageData(width: 2000, placeholder: DOMINANT_COLOR)
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
    const recentData = data.allPrismicPortfolio.nodes
    return (
        <SectionLayout label={homeStyles.recentProjects} title="View More Projects" subtitle="Case Study">
            <div className={homeStyles.cardWrapper}>
                {recentData.filter(recents => recents.data.cover_title[0].name.text !== title).slice(0, 3).map((recent, index) => (
                    <React.Fragment key={index}>
                        <CTACardModule 
                            title={recent.data.cover_title[0].name.text}
                            shortDescr={recent.data.overview[0].short_description.text} 
                            work={recent.data.overview[0].short_tags.text}
                            url={`/${recent.uid}`}
                            cover={recent.data.cover_title[0].background_image.gatsbyImageData}
                            />
                    </React.Fragment>
                ))}
            </div>
        </SectionLayout>
    );
};

export default NextProjectSection;