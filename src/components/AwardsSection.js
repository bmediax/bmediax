import React from 'react';
import SectionLayout from '../layout/SectionLayout';
import * as styles from '../styles/homepage.module.scss'
import AwardsView from './modules/AwardsView';

const AwardsSection = ({awardsData}) => {
    console.log(awardsData)
    return (
        <SectionLayout isDark={true} label={styles.awards} subtitle="Recognitions" title="Awards">
            <div style={{ maxWidth: "900px", margin: "auto" }}>
                {awardsData.items.map((awrds, index) => (
                    <AwardsView key={index} icon={awrds.medal} title={awrds.title} subTitle={awrds.sub_text} />
                ))}
            </div>
        </SectionLayout>
    );
};

export default AwardsSection;