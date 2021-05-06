import React from 'react';
import { Link } from 'gatsby'
import { BsArrowRight } from 'react-icons/bs'
import * as portfolioStyles from '../styles/portfolio.module.scss'

const NextProjectSection = () => {
    return (
        <div className={portfolioStyles.SCA_container}>
            <div className={portfolioStyles.SCA_wrapper}>
                <span>View my Next Project!</span>
                <Link to="https://google.com" className="btn outline outline-active fullwidth-btn">Next Project <BsArrowRight /></Link>
            </div>
        </div>
    );
};

export default NextProjectSection;