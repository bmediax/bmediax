import React from 'react';
import { Link } from 'gatsby';
import SectionLayout from '../layout/SectionLayout';
import AwardsView from './modules/AwardsView';
import * as styles from '../styles/homepage.module.scss'
import { BsPersonBoundingBox } from 'react-icons/bs'

const AwardsSection = ({awardsData}) => {
    return (
        <SectionLayout isDark={true} label={styles.awards} subtitle="Recognitions" title="Awards">
            <div style={{ maxWidth: "900px", margin: "auto" }}>
                {awardsData.items.map((awrds, index) => (
                    <AwardsView key={index} icon={awrds.medal} title={awrds.title} subTitle={awrds.sub_text} />
                ))}
            </div>
            <div className="pageColumnLayout" style={{ marginTop: "50px" }}>
                <div className="pageOneColumn">
                    <center>
                        <Link to="/meet-brian" className="btn outline-active clickViewAbout"> Meet Brian <BsPersonBoundingBox style={{ position: 'relative', marginLeft:"5px", top: '2px' }}/></Link>
                    </center>
                </div>
            </div>
        </SectionLayout>
    );
};

export default AwardsSection;