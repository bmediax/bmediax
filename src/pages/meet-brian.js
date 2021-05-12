import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import { HiOutlineDocumentDownload } from 'react-icons/hi'
import * as variables from '../styles/_variables.module.scss'
import SectionPageLayout from '../layout/SectionPageLayout';
import Layout from '../layout/index.js'
import bmediaxResume from '../assets/files/Bmediax_Resume.pdf'

const meetBrian = () => {
    return (
        <Layout title="Meet Brian">
            <SectionPageLayout label="page" title="Meet Brian" icon="Check Mark" align>
                <div className="pageColumnLayout sectionMaxWidth">
                    <div className="pageTwoColumn">
                        <p>Hi there, my name is Brian Moreno and I am a Digital Designer and Web Developer with over 7+ years of experience designing, prototyping, developing, and deploying large scale pixel-perfect websites and web applications for events, campaigns, businesses and organizations.</p>
                        <p>When I am not designing or coding interfaces, you can often find me out and about with my trusty camera and a good cup of coffee, capturing the world's beautiful raw moments.</p>

                        <p>My favorite productivity applications has to be the beautifully designed <a href="https://culturedcode.com/things/" target="_blank" className="azure" rel="noreferrer">Things 3</a>, <a target="_blank" href="https://superhuman.com/?utm_source=google&utm_medium=cpc&utm_campaign=20200918_brandedsearch&utm_term=superhuman&utm_content=a&gclid=CjwKCAjwkN6EBhBNEiwADVfya1MxNQQ8oizGrvHUyYIrIFNjLxuYvX4JcNQK7SO4an3BeejvW9s0axoCUlsQAvD_BwE" className="azure" rel="noreferrer">Superhuman</a>, <a href="https://todoist.com/" target="_blank" className="azure" rel="noreferrer">Todoist</a>, and <a href="https://www.craft.do/" target="_blank" className="azure" rel="noreferrer">Craft!</a> They all have beautiful interfaces with solid functionality!</p>
                        <a href="https://google.com" className="btn primary" style={{ display: "inline-block", marginTop : "20px" }}>Download Resume <HiOutlineDocumentDownload style={{ position: 'relative', top: '2px' }}/></a>
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
            <SectionPageLayout label="page" title="Accomplishments" icon="Check Mark" >
                <div className="pageColumnLayout sectionMaxWidth">
                    <div className="pageOneColumn">
                        <p>As a self taught and self motivated, designer and developer, I’ve had the great opportunity to compete in various competitions, one being the Skills USA State and National Web Design Competition, earning Gold for 2 years in a row and earning Bronze then Silver in the National level competitions, against over 31 competitors from around the US.</p>
                        <div className="pageColumnLayout" style={{ marginTop: "30px" }}>
                            <StaticImage src="../images/profile/brianSkillsBenson.jpg" alt="SkillsUSA State 2015 Competition " imgClassName="galleryImg" className="galleryImgWrap pageTwoColumn" style={{ flex: "1" }} />
                            <StaticImage src="../images/profile/silverMedal.jpg" alt="SkillsUSA National 2015 Competition" imgClassName="galleryImg" className="galleryImgWrap pageTwoColumn" style={{ flex: "1" }} />
                        </div>
                    </div>
                </div>
            </SectionPageLayout>
            <SectionPageLayout label="page" title="View My Resume!" bgColor={variables.oscuro} isDark>
                <div className="pageColumnLayout sectionMaxWidth">
                    <div className="pageOneColumn">
                        <center>
                            <a href={bmediaxResume} download="Bmediax_Resume" className="btn primary primary-active" style={{ display: "inline-block", marginTop : "20px" }}>Download Resume <HiOutlineDocumentDownload style={{ position: 'relative', top: '2px' }}/></a>
                        </center>
                    </div>
                </div>
            </SectionPageLayout>
        </Layout>
    )
}

export default meetBrian;