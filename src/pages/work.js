import React, { useState } from 'react';
import { graphql } from 'gatsby'
import { motion } from 'framer-motion'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import SectionPageLayout from '../layout/SectionPageLayout';
import Layout from '../layout/index.js'
import WorkImage from '../components/workImage';
import * as TagFilterStyles from '../components/modules/TagFilter.module.scss'

const Work = ({ data }) => {
  const [ tag, setTag ] = useState("All")
  if (!data) return null
  const document = data.allPrismicWork.edges[0].node.data.works
  
  const tagAction = (ts) => {
      setTag(ts)
  }
  return (
      <Layout title="Work">
          <SectionPageLayout label="page" title="Work">
              <div className="sectionMaxWidth">
                  <div className={TagFilterStyles.container}>
                      <ul className={TagFilterStyles.wrapper}>
                          <li><button className={TagFilterStyles.selectedTag} onClick={() => tagAction("All")}>All</button></li>
                          <li><button onClick={() => tagAction("Graphics")}>Graphics</button></li>
                          {/* <li>Iconography</li> */}
                          <li><button onClick={() => tagAction("Illustration")}>Illustration</button></li>
                          <li><button onClick={() => tagAction("Photography")}>Photography</button></li>
                      </ul>
                  </div>
                  <div style={{ maxwidth: "1400px", marginTop: "100px" }}>
                      <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                          <Masonry gutter="1em" >
                              {document.filter((tg) => {
                                if (tag === "All") {
                                  return tg
                                } else {
                                  return tg.tag === tag
                                }
                              }).map((work, index) => (
                                <motion.div key={index}>
                                  <WorkImage 
                                      title={work.title} 
                                      tag={work.tag} 
                                      link={work.link} 
                                      image={work.image.localFile} 
                                      alt={work.image.alt} />
                                </motion.div>
                              ))}
                          </Masonry>
                      </ResponsiveMasonry>
                  </div>
              </div>
          </SectionPageLayout>
      </Layout>
  )
}

export default Work;

export const query = graphql`
query WorkQuery {
  allPrismicWork {
    edges {
      node {
        data {
          works {
            title {
              text
            }
            tag
            link {
              url
            }
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(quality: 100)
                }
              }
              alt
            }
          }
        }
      }
    }
  }
}
`