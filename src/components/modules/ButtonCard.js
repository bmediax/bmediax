import React from 'react';
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import * as buttonCardStyles from './ButtonCard.module.scss'
import { LinkedinIcon, YoutubeIcon,  GithubIcon, InstagramIcon } from '../Icons'

const ButtonCard = ({ title, subtitle, url }) => {
    const iconChoice = (icn) => {
        if (icn === "LinkedIn") {
            return <LinkedinIcon />
        } else if (icn === "Github") {
            return <GithubIcon />
        } else if (icn === "Instagram") {
            return <InstagramIcon />
        } else if (icn === "Youtube") {
            return <YoutubeIcon />
        } else {
            console.warn("No Icon Detected")
            return null
        }
    }
    return (
        <motion.a href={url} target="_blank" className={buttonCardStyles.wrapper} whileHover={{ y:-3 }} whileTap={{ y:2 }}>
            <div className={buttonCardStyles.text}>
                <h3>{title}</h3>
                <h5>{subtitle}</h5>
            </div>
            <div className={buttonCardStyles.icon}>
                {iconChoice(title)}
            </div>
        </motion.a>
    );
};

// Prop Type
ButtonCard.defaultProps = {
    title: "Title",
    subtitle: "Sub Title",
    url: "https://example.com",
}

ButtonCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default ButtonCard;