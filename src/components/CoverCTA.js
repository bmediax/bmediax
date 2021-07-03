import React from 'react';
// import { RichText } from 'prismic-reactjs'
import { StaticImage } from 'gatsby-plugin-image'

// External
import { RiInboxFill } from 'react-icons/ri'
import { Link } from 'gatsby'
import * as homepageStyles from '../styles/homepage.module.scss'
import DropdownModule from './modules/dropdownModule';

// Icons
// import { EDIcon, AztecEye, Eye, Bone } from '../components/Icons'

const CoverCTA = () => {
    return (
        <div className={homepageStyles.coverCTA}>
            <div className={homepageStyles.coverCTA_wrapper}>
                <div className={homepageStyles.coverImage}>
                    <StaticImage src="../images/profile/headshot.png" alt="Bmediax Headshot" width={300} placeholder="blurred" className={homepageStyles.coverHeadshot} draggable="false" />
                </div>
                <div className={homepageStyles.coverInfo}>
                    <h1>Hi There, I'm A Digital Designer And Developer</h1>
                    <p>With over 5+ years of experience designing, prototyping, developing and deploying pixel-perfect websites, web applications and brands.</p>

                    {/* Buttons */}
                    <div className={homepageStyles.buttonWrapper}>
                        <DropdownModule />
                        {/* <Link to="mailto:hello@bmediax.dev" className="btn primary active">hello@bmediax.dev</Link> */}
                        <Link to="/portfolio" className="btn outline clickViewPortfolio">
                            <RiInboxFill style={{ position: "relative", top: "3px", marginRight: "5px"}} /> View Portfolio
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoverCTA;