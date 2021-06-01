import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image'
import { HiArrowCircleDown, HiDocumentDownload } from 'react-icons/hi'
// import * as variables from '../styles/_variables.module.scss'
import SectionPageLayout from '../layout/SectionPageLayout';
import Layout from '../layout/index.js'
import bmediaxResume from '../assets/files/Bmediax_Resume.pdf'
import bmediaxPrintResume from '../assets/files/Bmediax_Resume_Print.pdf'

const meetBrian = () => {
    return (
        <Layout title="Meet Brian">
            <SectionPageLayout label="page" title="Meet Brian" icon="Check Mark">
                <div className="pageColumnLayout sectionMaxWidth">
                    <div className="pageTwoColumn">
                        <p>Hi there, my name is Brian Moreno and I am a Digital Designer and Web Developer with over 7+ years of experience designing, prototyping, developing, and deploying large scale pixel-perfect websites and web applications for events, campaigns, businesses and organizations.</p>
                        <p>When I am not designing or coding interfaces, you can often find me out and about with my trusty camera and a good cup of coffee, capturing the world's beautiful raw moments.</p>

                        <p>My favorite productivity applications has to be the beautifully designed <a href="https://culturedcode.com/things/" target="_blank" className="azure" rel="noreferrer">Things 3</a>, <a target="_blank" href="https://superhuman.com/?utm_source=google&utm_medium=cpc&utm_campaign=20200918_brandedsearch&utm_term=superhuman&utm_content=a&gclid=CjwKCAjwkN6EBhBNEiwADVfya1MxNQQ8oizGrvHUyYIrIFNjLxuYvX4JcNQK7SO4an3BeejvW9s0axoCUlsQAvD_BwE" className="azure" rel="noreferrer">Superhuman</a>, <a href="https://todoist.com/" target="_blank" className="azure" rel="noreferrer">Todoist</a>, and <a href="https://www.craft.do/" target="_blank" className="azure" rel="noreferrer">Craft!</a> They all have beautiful interfaces with solid functionality!</p>
                        <div className="btn-flex">
                            <a href={bmediaxResume} download="Bmediax_Resume" className="btn primary clickDownloadResume">Download Resume <HiArrowCircleDown style={{ position: 'relative', top: '2px' }}/></a>
                            <a href={bmediaxPrintResume} download="Bmediax_Resume_Print" className="btn primary clickDownloadResumePrint">Download Print Resume <HiDocumentDownload style={{ position: 'relative', top: '2px' }}/></a>
                        </div>
                    </div>
                    <div className="pageTwoColumn">
                        <div className="gallery gallery-masonry">
                            <StaticImage src="../images/profile/brianScreen.jpg" alt="Image Brian" imgClassName="galleryImg" className="galleryImgWrap gallery-masonry-1" />
                            <StaticImage src="../images/profile/brianSkillsusa.jpg" alt="Image Brian" imgClassName="galleryImg" className="galleryImgWrap gallery-masonry-2" />
                            <StaticImage src="../images/profile/brianWedding.jpg" alt="Image Brian" imgClassName="galleryImg" className="galleryImgWrap gallery-masonry-3" />
                        </div>
                    </div>
                </div>
            </SectionPageLayout>
            <StaticImage
            style={{
                gridArea: "1/1",
                padding: "200px 0px",
                height:"150px",
                display: "block"
            }}
            className="imageSection"
            // maxHeight: 600,
            layout="fullWidth"
            // aspectRatio={4 / 1}
            alt=""
            src="../images/profile/brianSitting.jpg" />
            <SectionPageLayout title="Accomplishments" icon="Check Mark" >
                <div className="pageColumnLayout sectionMaxWidth">
                    <div className="pageOneColumn">
                        <p>As a self taught and self motivated, designer and developer, I’ve had the great opportunity to compete in various competitions, one being the Skills USA State and National Web Design Competition, earning Gold for 2 years in a row and earning Bronze then Silver in the National level competitions, against over 31 competitors from around the US.</p>
                        <div className="pageColumnLayout" style={{ marginTop: "30px" }}>
                            <StaticImage src="../images/profile/skillsusa2015.jpg" alt="SkillsUSA National 2015 Competition" imgClassName="galleryImg" className="galleryImgWrap pageTwoColumn" style={{ flex: "1" }} />
                            <StaticImage src="../images/profile/brianSkillsBenson.jpg" alt="SkillsUSA State 2015 Competition " imgClassName="galleryImg" className="galleryImgWrap pageTwoColumn" style={{ flex: "1" }} />
                        </div>
                        {/* <div className="pageColumnLayout" style={{ marginTop: "30px" }}>
                            <StaticImage src="../images/profile/brian_medalion.jpg" alt="SkillsUSA National 2015 Competition" imgClassName="galleryImg" className="galleryImgWrap pageTwoColumn" style={{ flex: "1" }} />
                        </div> */}
                    </div>
                </div>
            </SectionPageLayout>
            <SectionPageLayout idLabel="meetBrian">
                <div className="pageColumnLayout sectionMaxWidth">
                    <div className="cardLink_wrapper">
                        <h1>View my Portfolio</h1>
                        <Link to="/portfolio/edutainment" className="btn outline-active clickViewPortfolioFromAbout">View a Case Study</Link>
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
    )
}

export default meetBrian;