import React from 'react';
import SectionLayout from '../layout/SectionLayout';
import * as styles from '../styles/homepage.module.scss'

const AwardsSection = () => {
    return (
        <SectionLayout isDark={true} label={styles.awards} subtitle="Recognitions" title="Awards">
            <div>
                Awards
            </div>
        </SectionLayout>
    );
};

export default AwardsSection;