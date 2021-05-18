import React from 'react';
import { graphql } from 'gatsby'
// import { StaticImage } from 'gatsby-plugin-image'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
// import * as variables from '../styles/_variables.module.scss'
import SectionPageLayout from '../layout/SectionPageLayout';
import Layout from '../layout/index.js'
import TagFilter from '../components/modules/TagFilter';
import WorkImage from '../components/workImage';

const work = ({ data }) => {
    if (!data) return null
    const document = data.allPrismicWork.edges[0].node.data.works
    return (
        <Layout title="Work">
            <SectionPageLayout label="page" title="Work">
                <div className="sectionMaxWidth">
                    <TagFilter />
                    <div style={{ maxwidth: "1400px", marginTop: "100px" }}>
                        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                            <Masonry gutter="1em" >
                                {document.map((work, index) => (
                                    <WorkImage key={index} 
                                        title={work.title} 
                                        tag={work.tag} 
                                        link={work.link} 
                                        image={work.image.localFile} 
                                        alt={work.image.alt} />
                                ))}
                                {/* <StaticImage alt="Images for Testing" src="https://images.unsplash.com/photo-1517021818302-9b520a06c834?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" />
                                <StaticImage alt="Images for Testing" src="https://images.unsplash.com/photo-1531346910157-b6b597b25fb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" />
                                <StaticImage alt="Images for Testing" src="https://images.unsplash.com/photo-1516961642265-531546e84af2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" />
                                <StaticImage alt="Images for Testing" src="https://images.unsplash.com/photo-1548366426-7b1024cea820?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" />
                                <StaticImage alt="Images for Testing" src="https://images.unsplash.com/photo-1516961642265-531546e84af2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" />
                                <StaticImage alt="Images for Testing" src="https://images.unsplash.com/photo-1531346910157-b6b597b25fb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" /> */}
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
                </div>
            </SectionPageLayout>
        </Layout>
    )
}

export default work;

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