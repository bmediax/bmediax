import { Section } from '../layout/SectionLayout';
import * as styles from "../styles/homepage.module.scss";
import ButtonCard from "./modules/ButtonCard";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

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
  const siteSocials = data.site.siteMetadata.socials;
  return (
    <Section
      className={styles.friends}
      title="Let's Be Friends"
      subtitle="Social Media"
      theme="primary"
    >
      <div className={`${styles.buttonCardContainer} sectionMaxWidth`}>
        {siteSocials.map((social, index) => (
          <ButtonCard
            key={index}
            title={social.platform}
            subtitle={social.subTitle}
            url={social.url}
          />
        ))}
      </div>
    </Section>
  );
};

export default FriendsSection;