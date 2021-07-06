import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"
import * as txageStyles from './FullTxage.module.scss'

const FullTxageModule = ({ title, raw, cover, url, work, shortDescr }) => {
    return (
        <div className={txageStyles.txageContainer}>
            <div className={txageStyles.fullTxage}>
                {/* <img src="" 
                    className="txageImage" height="300px" /> */}
                <StaticImage 
                    alt="A Placeholder Image"
                    src="https://images.unsplash.com/photo-1519989041117-c6bf935facde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80" 
                    loading="lazy"
                    className={txageStyles.txageImage}
                />
                <div className={txageStyles.txageText}>
                    <h4>Web Development & Design</h4>
                    <h3>Reiko for PCC</h3>
                    <p>Lorem Ipsum dolor sit amet, consecetur adipiscing elit, sed eiusmod tempor...</p>
                    <Link to="/portfolio">
                        <button className="btn outline-inverse">
                            View Case Study
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FullTxageModule;