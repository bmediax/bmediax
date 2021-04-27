import React from 'react';
// import { IoFileTrayStacked } from 'react-icons/io'
import { RiInboxFill } from 'react-icons/ri'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as homepageStyles from '../styles/homepage.module.scss'

const Cover = () => {
    return (
        <div className={homepageStyles.cover}>
            <StaticImage src="../images/profile/headshot.png" alt="Bmediax Headshot" width={150} placeholder="blurred" className="coverheadshot" />
            <div className={homepageStyles.text}>
                <h1>Hello there, my name is Brian!</h1>
                <p>I am a <span className="azure">Digital Designer</span> and <span className="azure">Web Developer</span> with over <span className="azure">7+ years</span> of experience <span className="azure">designing, prototyping, developing, and deploying</span> large scale pixel-perfect <span className="azure">websites and web apps</span></p>
                <div className={homepageStyles.buttonWrapper}>
                    <Link to="mailto:hello@bmediax.dev" className="btn primary active">hello@bmediax.dev</Link>
                    <Link to="/portfolio" className="btn ghost active">
                        <RiInboxFill /> View Portfolio
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cover;