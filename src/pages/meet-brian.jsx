import "bootstrap/dist/css/bootstrap.min.css";

import * as styles from "../styles/meetBrian.module.scss";

import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { HiArrowCircleDown, HiDocumentDownload } from "react-icons/hi";
import { Link, graphql } from "gatsby";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import React, { useEffect } from "react";

import Button from "../components/modules/Button";
import ButtonWrapper from "../components/ButtonWrapper";
import DateRef from "../components/DateRef";
import Layout from "../layout/index.js";
import ListRef from "../components/ListRef";
import { PrismicRichText } from "@prismicio/react";
import SectionPageLayout from "../layout/SectionPageLayout";
import WebSkills from "../components/webSkills";
import educationData from "../data/educationData";
import { useState } from "react";

const MeetBrian = ({ data }) => {
  const [expData, setExpData] = useState(null);
  const document = data.prismicAbout.data;

  useEffect(() => {
    let expArr = [];

    for (let i in document.experience_item) {
      expArr.push({
        title: document.experience_item[i].title.text,
        reference: document.experience_item[i].reference.text,
        date: document.experience_item[i].date.text,
        location: document.experience_item[i].location.text,
        link: document.experience_item[i].link.text,
        description: document.experience_item[i].description.text,
      });
    }
    setExpData(expArr);
  }, [document.experience_item]);

  return (
    <Layout title="Meet Brian">
      <SectionPageLayout label="page lighterSection" title="Meet Brian">
        <div className="pageColumnLayout sectionMaxWidth">
          <div className="pageTwoColumn pageSections">
            <PrismicRichText field={document.intro_bio.richText} />
            <ButtonWrapper>
              <Button
                type="primary"
                link={document.resume_button_link.url}
                download="Bmediax_Resume"
                className="clickDownloadResume"
              >
                Download Resume
                <HiArrowCircleDown
                  style={{ position: "relative", top: "-1px", left: "5px" }}
                />
              </Button>
              <Button
                type="primary"
                link={document.resume_button_link_print.url}
                download="Bmediax_Resume_Print"
                className="clickDownloadResumePrint"
              >
                Download Resume (Print)
                <HiDocumentDownload
                  style={{ position: "relative", top: "-1px", left: "5px" }}
                />
              </Button>
            </ButtonWrapper>
          </div>
          <div className="pageTwoColumn">
            <div className="gallery gallery-masonry">
              <GatsbyImage
                image={document.headshot.gatsbyImageData}
                alt="Brian Moreno Headshot"
                imgClassName="galleryImg"
                className="galleryImgWrap gallery-masonry-1"
              />
            </div>
          </div>
        </div>
      </SectionPageLayout>
      <SectionPageLayout title="" label="sectionDark">
        <div className="pageColumnLayout sectionMaxWidth">
          <div
            className={`pageTwoColumn pageSections ${styles.meetBrian_freeTime}`}
          >
            <div className={styles.pageHeader}>
              <PrismicRichText field={document.free_time.richText} />
            </div>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="1em">
                {document.free_time_images.map((imageItem, index) => (
                  <div data-caption={imageItem.images.alt}>
                    <GatsbyImage
                      key={index}
                      image={imageItem.images.gatsbyImageData}
                      alt={imageItem.images.alt}
                    />
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </SectionPageLayout>
      <StaticImage
        style={{
          gridArea: "1/1",
          padding: "200px 0px",
          maxHeight: "500px",
          display: "block",
        }}
        className="imageSection"
        // maxHeight: 600,
        layout="fullWidth"
        // aspectRatio={4 / 1}
        alt=""
        src="../images/profile/brianScreen.jpg"
      />
      <SectionPageLayout title="Resume" label="lighterSection">
        <div className="pageColumnLayout sectionMaxWidth">
          <div className="pageOneColumn">
            <WebSkills />
            <ListRef />
            {expData && (
              <DateRef data={expData} isFluid={true} title="Experience" />
            )}
            <DateRef data={educationData} isFluid={true} title="Education" />
            {/* <div className="pageColumnLayout" style={{ marginTop: "30px" }}>
              <StaticImage
                src="../images/profile/skillsusa2015.jpg"
                alt="SkillsUSA National 2015 Competition"
                imgClassName="galleryImg"
                className="galleryImgWrap pageTwoColumn"
                style={{ flex: "1" }}
              />
              <StaticImage
                src="../images/profile/brianSkillsBenson.jpg"
                alt="SkillsUSA State 2015 Competition "
                imgClassName="galleryImg"
                className="galleryImgWrap pageTwoColumn"
                style={{ flex: "1" }}
              />
            </div> */}
          </div>
        </div>
      </SectionPageLayout>
      <SectionPageLayout label="darkerSection">
        <div className="pageColumnLayout sectionMaxWidth">
          <div className="cardLink_wrapper">
            <h1>View my Portfolio</h1>
            <Link
              to="/covideo"
              className="btn outline-active clickViewPortfolioFromAbout"
            >
              View a Case Study
            </Link>
          </div>
        </div>
      </SectionPageLayout>
      {/* <SectionPageLayout label="page" title="View My Resume!" bgColor={variables.oscuro} isDark>
                <div className="pageColumnLayout sectionMaxWidth">
                    <div className="pageOneColumn">
                        <center>
                            <div className="btn-flex sectionMaxWidth">
                                <a href={bmediaxResume} download="Bmediax_Resume" className="btn primary primary-active">Download Resume <HiArrowCircleDown style={{ position: 'relative', top: '2px' }}/></a>
                                <a href={bmediaxPrintResume} download="Bmediax_Resume_Print" className="btn primary primary-active">Download Print Resume <HiDocumentDownload style={{ position: 'relative', top: '2px' }}/></a>
                            </div>
                        </center>
                    </div>
                </div>
            </SectionPageLayout> */}
    </Layout>
  );
};

export const query = graphql`
  query meetQuery {
    prismicAbout {
      data {
        experience_item {
          date {
            text
          }
          description {
            text
          }
          link {
            text
          }
          location {
            text
          }
          reference {
            text
          }
          title {
            text
          }
        }
        headshot {
          gatsbyImageData
        }
        intro_bio {
          richText
        }
        resume_button_link {
          url
        }
        resume_button_link_print {
          url
        }
        free_time_images {
          images {
            gatsbyImageData
            alt
          }
        }
        free_time {
          richText
        }
      }
    }
  }
`;

export default MeetBrian;
