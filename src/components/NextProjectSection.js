import React from 'react';
import { Link } from 'gatsby'
import { BsArrowRight } from 'react-icons/bs'
import * as portfolioStyles from '../styles/portfolio.module.scss'

const NextProjectSection = ({ nextProjectData }) => {
    return (
        <div className={portfolioStyles.SCA_container}>
            <div className={portfolioStyles.SCA_wrapper}>
                <span>View my Next Project!</span>
                <Link to={`/portfolio/${nextProjectData.uid}`} className="btn outline outline-active fullwidth-btn">Next Project <BsArrowRight /></Link>
            </div>
        </div>
    );
};

export default NextProjectSection;