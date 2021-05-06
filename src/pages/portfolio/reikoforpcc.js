import React from 'react';
import { graphql } from 'gatsby'
import PortfolioTemplate from '../../layout/PortfolioTemplate'

const reikoforpcc = ({ data }) => {
    if (!data) return null
    const document = data.prismicPortfolio.data
    return (
        <PortfolioTemplate data={document} />
    );
};

export default reikoforpcc;

export const query = graphql`
query reikoforpccQuery {
  prismicPortfolio(uid: {eq: "reikoforpcc"}) {
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
        role {
          text
        }
        work {
          text
        }
        project_link {
          url
          target
        }
      }
      results {
        description {
          text
        }
      }
    }
  }
}
`