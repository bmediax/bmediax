import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import SectionLayout from '../layout/SectionLayout';
import * as styles from '../styles/homepage.module.scss'
import ButtonCard from './modules/ButtonCard';

const FriendsSection = () => {
    const data = useStaticQuery(graphql`
    query socialFriendsQuery {
        site {
            siteMetadata {
                socials {
                    url
                    subTitle
                    platform
                }
            }
        }
    }
    `);
    const siteSocials = data.site.siteMetadata.socials
    return (
        <SectionLayout 
            label={styles.friends} 
            title="Let's Be Friends" 
            subtitle="Social Media">
            <div className={styles.buttonCardContainer}>
                {siteSocials.map((social, index) => (
                    <ButtonCard 
                        key={index}
                        title={social.platform} 
                        subtitle={social.subTitle} 
                        url={social.url} />
                ))}
                {/* <ButtonCard title="LinkedIn" subtitle="Professional" icon="LinkedIn" />
                <ButtonCard title="Github" subtitle="Development" icon="Github" /> */}
            </div>
        </SectionLayout>
    );
};

export default FriendsSection;