import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import * as homepageStyles from '../styles/homepage.module.scss'

const Cover = () => {
    return (
        <div className={homepageStyles.cover}>
            <StaticImage src="../images/profile/headshot.jpg" alt="Bmediax Headshot" width={150} placeholder="blurred" className="coverheadshot" />
            <h1>Hello there, my name is Brian!</h1>
            <p>I am a Digital Designer and Web Developer with over 7+ years of experience designing, prototyping, developing, and deploying large scale pixel-perfect websites and web apps</p>
        </div>
    );
};

export default Cover;