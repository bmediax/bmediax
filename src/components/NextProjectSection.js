import React from 'react';
import { Link } from 'gatsby'
import { BsArrowRight } from 'react-icons/bs'
import * as portfolioStyles from '../styles/portfolio.module.scss'

const NextProjectSection = ({ nextProjectData }) => {
    return (
        <div style={{padding: "150px 5%"}}>
            <div className={portfolioStyles.SCA_container}>
                <div className={portfolioStyles.SCA_wrapper}>
                    <div>View my Next Project!</div>
                    <Link to={`/portfolio/${nextProjectData.uid}`} 
                        className="btn outline-active fullwidth-btn" style={{ width: "100%" }}>
                            Next Project: <span style={{ textTransform: 'capitalize' }}>{nextProjectData.uid}</span> <BsArrowRight />
                    </Link>
                </div>
            </div>
            <h1 className={portfolioStyles.message}>Or</h1>
            <div className="pageColumnLayout sectionMaxWidth">
                <div className="cardLink_wrapper">
                    <h1>View my Work</h1>
                    <Link to="/work" className="btn outline-active">View Work</Link>
                </div>
            </div>
        </div>
    );
};

export default NextProjectSection;