import React from 'react';
import SectionLayout from '../layout/SectionLayout';
import * as styles from '../styles/homepage.module.scss'
import CTACardModule from './modules/CTACardModule';
import { portfolioData } from '../data/portfolioData'

const RecentProjectsSection = () => {
    return (
        <SectionLayout label={styles.recentProjects} title="Recent Projects" subtitle="Portfolio">
            <div className={styles.cardWrapper}>
                {portfolioData.slice(0, 3).map((portfolio, index) => (
                    <CTACardModule {...portfolio} key={index} />
                ))}
            </div>
        </SectionLayout>
    );
};

export default RecentProjectsSection;