import React from 'react';
import { Link } from 'gatsby'
import { BsArrowRight } from 'react-icons/bs'
import * as portfolioStyles from '../styles/portfolio.module.scss'

const NextProjectSection = ({ nextProjectData }) => {
    return (
        <div className={portfolioStyles.SCA_container}>
            <div className={portfolioStyles.SCA_wrapper}>
                <div>View my Next Project!</div>
                <Link to={`/portfolio/${nextProjectData.uid}`} 
                    className="btn outline-active fullwidth-btn" style={{ width: "100%" }}>
                        Next Project: <span style={{ textTransform: 'capitalize' }}>{nextProjectData.uid}</span> <BsArrowRight />
                </Link>
            </div>
        </div>
    );
};

export default NextProjectSection;