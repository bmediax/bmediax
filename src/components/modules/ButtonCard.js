import React from 'react';
import { motion } from 'framer-motion'
import * as buttonCardStyles from './ButtonCard.module.scss'
import { LinkedinIcon, GithubIcon, InstagramIcon } from '../Icons'

const ButtonCard = ({ title, subtitle, url }) => {
    const iconChoice = (icn) => {
        if (icn === "LinkedIn") {
            return <LinkedinIcon />
        } else if (icn === "Github") {
            return <GithubIcon />
        } else if (icn === "Instagram") {
            return <InstagramIcon />
        } else {
            console.warn("No Icon Detected")
            console.log(icn)
            return null
        }
    }
    return (
        <motion.a href={url} target="_blank" className={buttonCardStyles.wrapper} whileHover={{ y:-3 }}>
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

export default ButtonCard;