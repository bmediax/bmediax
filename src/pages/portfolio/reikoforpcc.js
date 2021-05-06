import React from 'react';
import { graphql } from 'gatsby'
import PortfolioTemplate from '../../layout/PortfolioTemplate'

const reikoforpcc = ({ data }) => {
    if (!data) return null
    const document = data.allPrismicPortfolio.edges[0].node.data
    // console.log(document)
    return (
        <PortfolioTemplate data={document} />
    );
};

export default reikoforpcc;

export const query = graphql`
query reikoforpccPortfolioQuery {
  allPrismicPortfolio(filter: {uid: {eq: "reikoforpcc"}}) {
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
          }
          design {
            description {
              text
            }
            quote {
              text
            }
          }
          next_project {
            uid
          }
          overview {
            deliverables {
              text
            }
            description {
              text
            }
            project_link {
              url
            }
            role {
              text
            }
            work {
              text
            }
          }
          results {
            description {
              text
            }
          }
          body {
            slice_type
            items {
              colour
            }
          }
        }
      }
    }
  }
}
`