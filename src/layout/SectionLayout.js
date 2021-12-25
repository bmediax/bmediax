import PropTypes from "prop-types";
import React from "react";

const SectionLayout = ({
  title,
  subtitle,
  isDark,
  isTheme,
  children,
  label,
  bgColor,
  ide,
  id,
}) => {
  return (
    <section
      className={`${isTheme ? isTheme : ""} ${label ? label : ""}`}
      style={{ backgroundColor: bgColor }}
      id={ide || id}
    >
      <div className={`section-title ${isDark ? "darkTitle" : ""}`}>
        <h4>{subtitle}</h4>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
};

export const Section = ({
  children,
  title,
  subtitle,
  id,
  className,
  theme,
}) => {
  return (
    <section className={`${theme ? `${theme}Theme` : ""} ${className}`} id={id}>
      <div className="section-title">
        <h4>{subtitle}</h4>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
};

Section.PropTypes = {
  title: propTypes.string,
};

export default SectionLayout;
