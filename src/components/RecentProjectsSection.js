import React from 'react';
import SectionLayout from '../layout/SectionLayout';
import * as styles from '../styles/homepage.module.scss'
import CTACardModule from './modules/CTACardModule';
import { portfolioData } from '../data/portfolioData'

const RecentProjectsSection = () => {
    return (
        <SectionLayout label={styles.recentProjects}>
            <div className="section-title">
                <h4>Portfolio</h4>
                <h2>Recent Projects</h2>
            </div>
            <div className={styles.cardWrapper}>
                {portfolioData.slice(0, 3).map((portfolio, index) => (
                    <CTACardModule {...portfolio} key={index} />
                ))}
            </div>
        </SectionLayout>
    );
};

export default RecentProjectsSection;