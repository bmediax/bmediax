import React from 'react';
import SectionLayout from '../layout/SectionLayout';
import * as variables from '../styles/_variables.module.scss'
// import * as styles from '../styles/homepage.module.scss'

const WhatDoSection = () => {
    return (
        <SectionLayout title="What Do I do" subtitle="Skills" isDark={true} bgColor={variables.masOscuro}>
            {/* <div className={styles.cardWrapper}> */}
                What Do I do
            {/* </div> */}
        </SectionLayout>
    );
};

export default WhatDoSection;