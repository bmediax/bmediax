import * as portfolioStyles from "../styles/portfolio.module.scss";

import { Parallax } from "react-scroll-parallax";
import React from "react";
import { motion } from "framer-motion";
import { slowSlideUp } from "../data/motionVariants";

const PortfolioTitle = ({ coverData }) => {
  return (
    <div className={`${portfolioStyles.text}`}>
      <div className="sectionMaxWidth" style={{ padding: "0 4%" }}>
        <Parallax y={[0, -0]} tagouter="figure">
          <motion.h1
            variants={slowSlideUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.9, ease: [0.45, 0.13, 0.23, 0.9] }}
          >
            {coverData.title.text}
          </motion.h1>
          <motion.div
            variants={slowSlideUp}
            transition={{
              delay: 0.4,
              duration: 0.9,
              ease: [0.45, 0.13, 0.23, 0.9],
            }}
            initial="hidden"
            animate="show"
            className={portfolioStyles.subtexts}
          >
            <h5 style={{ flex: 1 }}>{coverData.client.text}</h5>
            <h5 style={{ flex: 1 }}>{coverData.date.text}</h5>
          </motion.div>
        </Parallax>
      </div>
    </div>
  );
};

export default PortfolioTitle;
