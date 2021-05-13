import React from 'react'
import { motion } from 'framer-motion'
import * as portfolioStyles from '../styles/portfolio.module.scss'
import { slowSlideUp } from '../data/motionVariants'

const PortfolioTitle = ({coverData}) => {
    return (    
        <div className={`${portfolioStyles.text}`}>
            <div className="sectionMaxWidth" style={{ padding: "0 4%" }}>
                <motion.h1 variants={slowSlideUp} initial="hidden" animate="show" transition="transition">
                    {/* {coverData.title.text} */}
                    A leader, school admin, and advocate for social justice running for PCC Board Zone 7.
                </motion.h1>
                <motion.div variants={slowSlideUp} transition={{ delay:.2 }} initial="hidden" animate="show" className={portfolioStyles.subtexts}>
                    <h5 style={{ flex:2 }}>{coverData.client.text}</h5>
                    <h5 style={{ flex:1 }}>{coverData.date.text}</h5>
                </motion.div>
            </div>
        </div>
    )
}

export default PortfolioTitle