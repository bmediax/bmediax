import "bootstrap/dist/css/bootstrap.min.css";

import * as styles from "../styles/meetBrian.module.scss";

import { HiArrowCircleDown, HiDocumentDownload } from "react-icons/hi";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Button from "../components/modules/Button";
import ButtonWrapper from "../components/ButtonWrapper";
import DateRef from "../components/DateRef";
import Layout from "../layout/index.js";
import { Link } from "gatsby";
import ListRef from "../components/ListRef";
import React from "react";
import SectionPageLayout from "../layout/SectionPageLayout";
import { StaticImage } from "gatsby-plugin-image";
import WebSkills from "../components/webSkills";
import bmediaxPrintResume from "../assets/files/Bmediax_Resume_Print.pdf";
import bmediaxResume from "../assets/files/Bmediax_Resume.pdf";
import educationData from "../data/educationData";
import experienceData from "../data/experienceData";

const meetBrian = () => {
  return (
    <Layout title="Meet Brian">
      <SectionPageLayout label="page lighterSection" title="Meet Brian">
        <div className="pageColumnLayout sectionMaxWidth">
          <div className="pageTwoColumn pageSections">
            <h3>Who am I?</h3>
            <p>
              Hi there, my name is Brian Moreno and I am a Digital Designer and
              Web Developer with over 7+ years of experience designing,
              prototyping, developing, and deploying large scale pixel-perfect
              websites and web applications for events, campaigns, businesses
              and organizations.
            </p>

            <h3>Favorite Productivity Applications</h3>
            <p>
              My favorite productivity applications has to be the beautifully
              designed{" "}
              <a
                href="https://culturedcode.com/things/"
                target="_blank"
                className="azure"
                rel="noreferrer"
              >
                Things 3
              </a>
              ,{" "}
              <a
                target="_blank"
                href="https://superhuman.com/?utm_source=google&utm_medium=cpc&utm_campaign=20200918_brandedsearch&utm_term=superhuman&utm_content=a&gclid=CjwKCAjwkN6EBhBNEiwADVfya1MxNQQ8oizGrvHUyYIrIFNjLxuYvX4JcNQK7SO4an3BeejvW9s0axoCUlsQAvD_BwE"
                className="azure"
                rel="noreferrer"
              >
                Superhuman
              </a>
              ,{" "}
              <a
                href="https://todoist.com/"
                target="_blank"
                className="azure"
                rel="noreferrer"
              >
                Todoist
              </a>
              , and{" "}
              <a
                href="https://www.craft.do/"
                target="_blank"
                className="azure"
                rel="noreferrer"
              >
                Craft!
              </a>{" "}
              They all have beautiful interfaces with solid functionality!
            </p>
            <ButtonWrapper>
              <Button
                type="primary"
                link={bmediaxResume}
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
                link={bmediaxPrintResume}
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
              <StaticImage
                src="../images/profile/brianPicture.jpg"
                alt="Image Brian"
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
              <h3>What I do in my free time.</h3>
              <p>
                When I am not designing or coding interfaces, you can often find
                me out and about with my trusty camera and a good cup of coffee,
                capturing the world's beautiful raw moments.
              </p>
            </div>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="1em">
                <StaticImage
                  src="../images/profile/sharkyDog.jpg"
                  alt="Sharky Dog"
                />
                <StaticImage
                  src="../images/profile/sharkyPal.jpeg"
                  alt="Sharky Pal"
                />
                <StaticImage
                  src="../images/profile/bread.jpg"
                  alt="Mexican Bread"
                />
                <StaticImage
                  src="../images/profile/coffeeShop.jpg"
                  alt="Coffee Shop Image"
                />
                <StaticImage
                  src="../images/profile/buslight.jpg"
                  alt="Bus Max"
                />
                <StaticImage
                  src="../images/profile/matchaDrink.jpg"
                  alt="Matcha Drink"
                />
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
            <DateRef data={experienceData} isFluid={true} title="Experience" />
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
              to="/casestudy/bevy"
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

export default meetBrian;
