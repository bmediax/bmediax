import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";


const Button = ({
  children,
  link,
  path,
  type,
  className,
  btnSection,
  download,
}) => {
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
  return link ? (
    <a
      href={link}
      download={download}
      className={`${btnSection ? "section-link" : ""} btn ${typeCheck(
        type
      )} ${classCheck(className)}`}
    >
      {children}
    </a>
  ) : (
    <Link
      to={path}
      className={`${btnSection ? "section-link" : ""} btn ${typeCheck(
        type
      )} ${classCheck(className)}`}
    >
      {children}
    </Link>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  link: PropTypes.string,
};

export default Button;