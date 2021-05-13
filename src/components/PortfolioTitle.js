import React from 'react'
import { motion } from 'framer-motion'
import * as portfolioStyles from '../styles/portfolio.module.scss'
import { slowSlideUp } from '../data/motionVariants'

const PortfolioTitle = ({coverData}) => (
    <div className={`${portfolioStyles.text}`}>
        <div className="sectionMaxWidth" style={{ padding: "0 4%" }}>
            <motion.h1 variants={slowSlideUp} initial="hidden" animate="show" transition="transition">
                {coverData.title.text}
            </motion.h1>
            <motion.div variants={slowSlideUp} transition={{ delay:.2 }} initial="hidden" animate="show"
            style={{ marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h5>{coverData.client.text}</h5>
                <h5 style={{ marginLeft: "50px"}}>{coverData.date.text}</h5>
            </motion.div>
        </div>
    </div>
)

export default PortfolioTitle