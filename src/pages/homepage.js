import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout/index.js'
import Cover from '../components/Cover'
import RecentProjectsSection from '../components/RecentProjectsSection.js'
import AwardsSection from '../components/AwardsSection.js'

const homepage = ({ data }) => {
    if (!data) return null
    const document = data.allPrismicHomepage.edges[0].node.data
    return (
        <Layout title="Homepage">
            <Cover coverData={document.cover[0]} />
            <RecentProjectsSection />
            <AwardsSection />
        </Layout>
    )
}

export default homepage;

export const query = graphql`
query homepageQuery {
  allPrismicHomepage {
    edges {
      node {
        data {
          cover {
            title {
              text
            }
            description {
              text
              raw
              html
            }
          }
        }
      }
    }
  }
}
`