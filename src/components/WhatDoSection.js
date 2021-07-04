import React from 'react';
import SectionLayout from '../layout/SectionLayout';
import * as styles from '../styles/homepage.module.scss'
import InfoCardModule from './modules/InfoCardModule';

// Icons
import { BiCodeAlt } from 'react-icons/bi'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { MdPhotoCamera } from 'react-icons/md'
// import * as variables from '../styles/_variables.module.scss'

const WhatDoSection = () => {
    return (
        <SectionLayout title="What Do I do" subtitle="Skills" ide="firstSection">
            <div className={styles.cardWrapper} style={{ gap: "2em"  }}>
                <InfoCardModule 
                    subtitle="Technical"
                    title="Web Development"
                    descr="From Ecommerce to Blog websites. I design develop and deploy any scale sites."
                    icon={<BiCodeAlt />}
                />
                <InfoCardModule 
                    subtitle="Design"
                    title="Digital Design"
                    descr="I create and currate online branding identities through logo, asset and social media design."
                    icon={<AiOutlineAntDesign />}
                />
                <InfoCardModule 
                    subtitle="Photography"
                    title="Product Photography"
                    descr="Capturing variety of photos from headshots to product photography to be displayed on sites."
                    icon={<MdPhotoCamera />}
                />
            </div>
        </SectionLayout>
    );
};

export default WhatDoSection;