import * as styles from "./Button.module.scss";

import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Button = ({
  as = "url",
  children,
  href = undefined,
  to = undefined,
  type = false,
  className = null,
  isSection = false,
  download = false,
  state,
}) => {
  const typeCheck = (typeName) => {
    switch (typeName) {
      case "primary":
        return styles.primary;

      default:
        console.warn("No Type :(");
        return "";
    }
  };

  const classCheck = (className) => {
    if (className !== undefined || className !== null) {
      return className;
    } else {
      return "";
    }
  };

  const handleAsType = (
    as,
    href,
    to,
    download,
    isSection,
    type,
    className,
    children,
    state
  ) => {
    if (as === "link") {
      return (
        <Link
          to={to}
          className={`${styles.btn} ${isSection ? "section-link" : ""} ${
            type ? typeCheck(type) : ""
          } ${state ? styles[state] : ""} ${
            className ? classCheck(className) : ""
          }`}
        >
          {children}
        </Link>
      );
    } else if (as === "url") {
      return (
        <a
          href={href}
          download={download && download}
          className={`${styles.btn} ${isSection ? "section-link" : ""} ${
            type ? typeCheck(type) : ""
          } ${state ? styles[state] : ""} ${
            className ? classCheck(className) : ""
          }`}
        >
          {children}
        </a>
      );
    }
  };

  return handleAsType(
    as,
    href,
    to,
    download,
    isSection,
    type,
    className,
    children,
    state
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  type: PropTypes.oneOf(["primary", ""]),
  link: PropTypes.string,
  className: PropTypes.string,
  isSection: PropTypes.bool,
  download: PropTypes.bool,
};

export default Button;
