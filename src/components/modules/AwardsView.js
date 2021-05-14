import React from 'react';
import { motion } from 'framer-motion'
import * as AwardsStyles from './AwardsView.module.scss'
import { GoldMedal, SilverMedal, BronzeMedal } from '../Icons'

const AwardsView = ({ icon, title, subTitle }) => {
    const chooseIcon = (icn) => {
        if (icn === "Gold") {
            return <GoldMedal />
        }
        else if (icn === "Silver") {
            return <SilverMedal />
        }
        else if (icn === "Bronze") {
            return <BronzeMedal />
        }
    }

    const chooseColor = (clr) => {
        if (clr === "Gold") {
            return "#C7A94C"
        } else if (clr === "Silver") {
            return "#BABABA"
        } else if (clr === "Bronze") {
            return "#BC7E40"
        }
    }
    return (
        <div className={AwardsStyles.container}>
            <motion.div 
                whileHover={{ scale:1.1 }}
                className={AwardsStyles.gfx} 
                style={{ boxShadow: `0px 10px 30px -8px ${chooseColor(icon)}`, backgroundColor: chooseColor(icon)}}>
                {chooseIcon(icon)}
            </motion.div>
            <div className={AwardsStyles.text}>
                <h3>{title.text}</h3>
                <h5>{subTitle.text}</h5>
            </div>
        </div>
    );
};

export default AwardsView;