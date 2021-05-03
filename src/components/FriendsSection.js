import React from 'react';
import SectionLayout from '../layout/SectionLayout';
import * as styles from '../styles/homepage.module.scss'
import ButtonCard from './modules/ButtonCard';

const FriendsSection = () => {
    return (
        <SectionLayout 
            label={styles.friends} 
            title="Let's Be Friends" 
            subtitle="Social Media">
            <div className={styles.buttonCardContainer}>
                <ButtonCard title="LinkedIn" subtitle="Professional" />
                <ButtonCard title="Instagram" subtitle="Photography" />
                <ButtonCard title="Github" subtitle="Development" />
            </div>
        </SectionLayout>
    );
};

export default FriendsSection;