import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout/index.js'
import Cover from '../components/Cover'
import RecentProjectsSection from '../components/RecentProjectsSection.js'
import AwardsSection from '../components/AwardsSection.js'

const IndexPage = ({ data }) => {
    if (!data) return null
    const document = data.allPrismicHomepage.edges[0].node.data
    const awards = data.allPrismicHomepage.edges[0].node.data.body
    return (
        <Layout title="Bmediax">
            <Cover coverData={document.cover[0]} />
            <RecentProjectsSection />
            <AwardsSection awardsData={awards[1]} />
        </Layout>
    )
}

export default IndexPage;

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
          body {
            ... on PrismicHomepageBodyAwardsSection {
              items {
                medal
                sub_text {
                  text
                }
                title {
                  text
                }
              }
            }
          }
        }
      }
    }
  }
}
`