import React from 'react';
import SectionLayout from '../layout/SectionLayout';
import * as styles from '../styles/homepage.module.scss'

const RecentProjectsSection = () => {
    return (
        <SectionLayout label={styles.recentProjects}>
            <div className="section-title">
                <h4>Portfolio</h4>
                <h2>Recent Projects</h2>
            </div>
        </SectionLayout>
    );
};

export default RecentProjectsSection;