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
  const classCheck = (className) => {
    if (className !== undefined || className !== null) {
      return className;
    } else {
      return "";
    }
  };
  return (
    <section
      className={`${theme ? `${theme}Theme` : ""} ${classCheck(className)}`}
      id={id}
    >
      <div className="section-title">
        <h4>{subtitle}</h4>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
};

Section.defaultProps = {
  title: "Section Title",
  subtitle: "Sub Title",
};

Section.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  theme: PropTypes.string,
};

export default SectionLayout;