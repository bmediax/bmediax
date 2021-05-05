import React from 'react';
import { BsArrowRight } from 'react-icons/bs'
import * as portfolioStyles from '../styles/portfolio.module.scss'

const NextProjectSection = () => {
    return (
        <div className={portfolioStyles.SCA_container}>
            <div className={portfolioStyles.SCA_wrapper}>
                <span>Thanks for Watching</span>
                <button className="btn outline outline-active">View Next Project <BsArrowRight /></button>
            </div>
        </div>
    );
};

export default NextProjectSection;