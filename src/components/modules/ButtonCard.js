import React from 'react';
import { motion } from 'framer-motion'
import * as buttonCardStyles from './ButtonCard.module.scss'

const ButtonCard = ({ title, subtitle }) => {
    return (
        <motion.a href="https://google.com" className={buttonCardStyles.wrapper} whileHover={{ y:-3 }}>
            <div className={buttonCardStyles.text}>
                <h3>{title}</h3>
                <h5>{subtitle}</h5>
            </div>
            <div className={buttonCardStyles.icon}></div>
        </motion.a>
    );
};

export default ButtonCard;