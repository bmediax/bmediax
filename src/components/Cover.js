import React from 'react';
// import { Parallax } from 'react-scroll-parallax'
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
            {/* <Parallax y={[20, -20]} tagOuter="figure"> */}
                <StaticImage src="../images/profile/headshot.png" alt="Bmediax Headshot" width={230} placeholder="blurred" className="coverheadshot" draggable="false" />
            {/* </Parallax> */}
            <div className={homepageStyles.text}>
                <h1>{ coverData.title.text }</h1>
                <RichText render={coverData.description.raw} />
                <div className={homepageStyles.buttonWrapper}>
                    <DropdownModule />
                    {/* <Link to="mailto:hello@bmediax.dev" className="btn primary active">hello@bmediax.dev</Link> */}
                    <Link to="/portfolio" className="btn ghost active clickViewPortfolio">
                        <RiInboxFill style={{ position: "relative", top: "3px", marginRight: "5px"}} /> View Portfolio
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cover;