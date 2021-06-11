import React from 'react';
// import { Link } from 'gatsby'
// import { BsArrowRight } from 'react-icons/bs'
import CTACardModule from './modules/CTACardModule';
import * as portfolioStyles from '../styles/portfolio.module.scss'
import * as styles from '../styles/homepage.module.scss'
import SectionLayout from '../layout/SectionLayout';

const NextProjectSection = ({ nextProjectData }) => {
    return (
        <SectionLayout label={styles.recentProjects} title="View More" subtitle="Case Study">
            <div className={styles.cardWrapper}>
                <div className={portfolioStyles.SCA_container}>
                    <CTACardModule img="https://images.unsplash.com/photo-1543872981-b148af6c5f6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" />
                    <CTACardModule img="https://images.unsplash.com/photo-1543872981-b148af6c5f6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" />
                    <CTACardModule img="https://images.unsplash.com/photo-1543872981-b148af6c5f6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" />
                </div>
                {/* <h1 className={portfolioStyles.message}>Or</h1>
                <div className="pageColumnLayout sectionMaxWidth">
                    <div className="cardLink_wrapper">
                        <h1>View my Work</h1>
                        <Link to="/work" className="btn outline-active">View Work</Link>
                    </div>
                </div> */}
            </div>
        </SectionLayout>
    );
};

export default NextProjectSection;