import React from 'react';
import { BsArrowRight } from 'react-icons/bs'
import * as portfolioStyles from '../styles/portfolio.module.scss'

const NextProjectSection = () => {
    return (
        <div className={portfolioStyles.SCA_container}>
            <div className={portfolioStyles.SCA_wrapper}>
                <span>Thanks for Watching!</span>
                <a href="https://google.com" className="btn outline outline-active fullwidth-btn">View My Next Project <BsArrowRight /></a>
            </div>
        </div>
    );
};

export default NextProjectSection;