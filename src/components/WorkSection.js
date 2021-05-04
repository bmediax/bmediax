import React from 'react'
import SectionLayout from '../layout/SectionLayout'
import * as styles from '../styles/homepage.module.scss'
import DropdownModule from './modules/dropdownModule'

const WorkSection = () => {
    return (
        <SectionLayout title="Let's Work Together" subtitle="Get In Touch" isDark label={styles.letsWork}>
            <div style={{ maxWidth: "250px", textAlign: "center", margin: "auto" }}>
                <DropdownModule />
            </div>
            <p style={{ textAlign: "center", paddingTop: "50px" }}>© 2021 All rights reserved - Designed and Coded by Brian Moreno</p>
        </SectionLayout>
    );
};

export default WorkSection;