import { CheckMarkIcon, PaintIcon } from "../components/Icons";

import React from "react";
// import * as portfolioStyles from '../styles/portfolio.module.scss'
import { motion } from "framer-motion";
import { titleTextFadeIn } from "../data/motionVariants";

const SectionPageLayout = ({
  title,
  isDark,
  bgLightDark,
  icon,
  children,
  label,
  idLabel,
  bgColor,
  align,
  sectionMaxWidth,
  bigTitle,
}) => {
  const checkIcon = (icn) => {
    if (icn === "Check Mark") {
      return <CheckMarkIcon />;
    } else if (icn === "Paint") {
      return <PaintIcon />;
    } else if (icn === "") {
      return "";
    }
  };
  
  return (
    <section
      id={idLabel}
      className={label}
      style={{ backgroundColor: bgColor }}
    >
      {title && (
        <div
          className={`section-title ${
            isDark ? "darkTitle" : ""
          } sectionMaxWidth ${sectionMaxWidth ? "sectionMaxWidth" : ""}`}
        >
          <motion.h2
            initial="hidden"
            animate="show"
            exit="exit"
            variants={titleTextFadeIn}
            style={{
              textAlign: align ? "left" : "center",
              fontSize: bigTitle ? "clamp(5rem, 15vw, 20rem)" : "",
            }}
          >
            {title}{" "}
            <span
              className={`sectionPortfolioIcon ${
                bgLightDark ? "lightdark" : ""
              }`}
            >
              {checkIcon(icon)}
            </span>
          </motion.h2>
        </div>
      )}
      {children}
    </section>
  );
};

export default SectionPageLayout;
