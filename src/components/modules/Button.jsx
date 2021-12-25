import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Button = ({ children, link, type, className, btnSection }) => {
  const typeCheck = (typeName) => {
    if (typeName != undefined || typeName != null) {
      return `btn-${typeName}`;
    } else {
      return "";
    }
  };

  const classCheck = (className) => {
    if (className != undefined || className != null) {
      return className;
    } else {
      return "";
    }
  };
  return (
    <Link to={link} className={`${btnSection ? "section-link" : ""}`}>
      <button className={`btn ${typeCheck(type)} ${classCheck(className)}`}>
        {children}
      </button>
    </Link>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  link: PropTypes.string,
};

export default Button;
