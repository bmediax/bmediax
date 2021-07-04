import React from 'react'
import { graphql } from 'gatsby'
import { BsArrowDown } from 'react-icons/bs'

import Layout from '../layout/index.js'
import WhatDoSection from '../components/WhatDoSection'
import RecentProjectsSection from '../components/RecentProjectsSection.js'
import AwardsSection from '../components/AwardsSection.js'
import CoverCTA from '../components/CoverCTA.js'

import * as homepageStyles from '../styles/homepage.module.scss'

const IndexPage = ({ data }) => {
    if (!data) return null
    const document = data.allPrismicHomepage.edges[0].node.data
    const awards = data.allPrismicHomepage.edges[0].node.data.body
    return (
        <Layout title="Bmediax" darkNav={true}>
            <CoverCTA coverData={document.cover[0]} />
            <a href="#firstSection" className={homepageStyles.scrollSection}>
                <span>Scroll Down</span>
                <BsArrowDown />
            </a>
            <WhatDoSection />
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