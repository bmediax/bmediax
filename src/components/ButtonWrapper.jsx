import * as wrapperStyles from "./ButtonWrapper.module.scss";
import React from "react";

const ButtonWrapper = ({ children }) => {
  return <div className={wrapperStyles.btnFlex}>{children}</div>;
};

export default ButtonWrapper;
