import React from 'react';
import { RichText } from 'prismic-reactjs'
import { StaticImage } from 'gatsby-plugin-image'

// External
import { RiInboxFill } from 'react-icons/ri'
import { Link } from 'gatsby'
import * as homepageStyles from '../styles/homepage.module.scss'
import DropdownModule from './modules/dropdownModule';


const Cover = ({ coverData }) => {
    return (
        <div className={homepageStyles.cover}>
            <StaticImage src="../images/profile/headshot.png" alt="Bmediax Headshot" width={150} placeholder="blurred" className="coverheadshot" />
            <div className={homepageStyles.text}>
                <h1>{ coverData.title.text }</h1>
                {/* <p>I am a <span className="azure">Digital Designer</span> and <span className="azure">Web Developer</span> with over <span className="azure">7+ years</span> of experience <span className="azure">designing, prototyping, developing, and deploying</span> large scale pixel-perfect <span className="azure">websites and web applications</span></p> */}
                {/* <p>{coverData.description.text}</p> */}
                <RichText render={coverData.description.raw} />
                <div className={homepageStyles.buttonWrapper}>
                    <DropdownModule />
                    {/* <Link to="mailto:hello@bmediax.dev" className="btn primary active">hello@bmediax.dev</Link> */}
                    <Link to="/portfolio" className="btn ghost active">
                        <RiInboxFill style={{ position: "relative", top: "3px", marginRight: "5px"}} /> View Portfolio
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cover;