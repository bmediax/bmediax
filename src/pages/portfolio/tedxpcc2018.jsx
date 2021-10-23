import React from 'react';
import { graphql } from 'gatsby'
import PortfolioTemplate from '../../layout/PortfolioTemplate'

const tedxpcc2018 = ({ data }) => {
    if (!data) return null
    const document = data.allPrismicPortfolio.edges[0].node.data
    return (
        <PortfolioTemplate data={document} pageTitle="TEDxPCC 2018" />
    );
};

export default tedxpcc2018;

export const query = graphql`
query tedxpcc2018PortfolioQuery {
  allPrismicPortfolio(filter: {uid: {eq: "tedxpcc2018"}}) {
    edges {
      node {
        data {
          cover_title {
            client {
              text
            }
            date {
              text
            }
            title {
              text
            }
            background_image {
              gatsbyImageData(width: 2000, placeholder: DOMINANT_COLOR)
              alt
              url
            }
          }
          design {
            description {
              text
            }
            quote {
              text
            }
          }
          design_image {
            alt
            gatsbyImageData(width: 2000, placeholder: DOMINANT_COLOR)
          }
          next_project {
            uid
          }
          overview {
            deliverables {
              text
              raw
              richText
              html
            }
            description {
              text
              raw
              richText
              html
            }
            problem {
              raw
              richText
            }
            solution {
              raw
              richText
            }
            project_link {
              url
            }
            role {
              text
              raw
              richText
              html
            }
            work {
              text
              raw
              richText
              html
            }
            design_tools {
              text
              raw
              richText
              html
            }
            development_tools {
              text
              raw
              richText
              html
            }
          }
          project_links {
            label {
              text
            }
            link {
              url
            }
          }
          results {
            description {
              text
              raw
              richText
            }
          }
          results_image {
            gatsbyImageData(width: 2000, placeholder: DOMINANT_COLOR)
            alt
          }
          body {
            ... on PrismicPortfolioDataBodyDesignColorPalette {
              slice_type
              items {
                colour
              }
            }
            ... on PrismicPortfolioDataBodyDesignImageGallery {
              slice_type
              items {
                image {
                  alt
                  gatsbyImageData(width: 2000, placeholder: DOMINANT_COLOR)
                }
              }
              primary {
                title {
                  text
                }
                column
              }
            }
            ... on PrismicPortfolioDataBodyDesignVideo {
              slice_type
              primary {
                column
                title {
                  text
                }
              }
              items {
                video_url {
                  url
                }
                video_height {
                  text
                }
              }
            }
            ... on PrismicPortfolioDataBodyResultsImageGallery {
              slice_type
              items {
                image {
                  alt
                  gatsbyImageData(width: 2000, placeholder: DOMINANT_COLOR)
                }
              }
              primary {
                title {
                  text
                }
                column
              }
            }
          }
        }
      }
    }
  }
}
`