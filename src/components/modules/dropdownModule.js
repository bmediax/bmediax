// import "react-dropdown/style.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";

import Button from "../atoms/Button";
import React from "react";

// import * as styles from "./dropdownModule.module.scss";
// import ToastModule from "./ToastModule";

// External Libs
// import Dropdown from "react-dropdown";

const DropdownModule = () => {
  // const [isSelect, SetIsSelect] = useState({
  //   selected: "",
  // });

  // const options = [
  //   {
  //     value: "Copy to Clipboard",
  //     label: "Copy to Clipboard",
  //     className: "success",
  //   },
  //   {
  //     value: "Open your Mail App",
  //     label: "Open your Mail App",
  //     className: "success",
  //   },
  // ];

  // const _onSelect = (option) => {
  //   SetIsSelect({ selected: option });
  //   selectAction(option);
  // };

  function selectAction() {
    // if (selectedAction.label === "Copy to Clipboard") {
    const notify = () => toast(`Copied to Clipboard`);

    const emailData = document.createElement("textarea");
    emailData.value = "hello@bmediax.dev";
    emailData.setAttribute("readonly", "");
    emailData.style.position = "absolute";
    emailData.style.left = "-9999px";
    document.body.appendChild(emailData);
    emailData.select();
    document.execCommand("copy");
    document.body.removeChild(emailData);
    // () => toast(selectAction.label);
    notify();
    // }
    // else if (selectedAction.label === "Open your Mail App") {
    //   const notify = () => toast(`Opened your Mail app`);
    //   window.location.href = "mailto:hello@bmediax.dev";
    //   notify();
    // }
    // return null;
  }
  // <div className="clickEmailContact">
  //   <ToastContainer />
  //   <span>{isSelect.label}</span>
  //   <Dropdown
  //     options={options}
  //     onChange={_onSelect}
  //     placeholder="hello@bmediax.dev"
  //     controlClassName={`btn ${primary ? "outline" : "activePrimary"}`}
  //     baseClassName={styles.dropdownMenu}
  //     menuClassName={styles.dropdownMenu}
  //     arrowClassName={styles.arrowDrop}
  //   />
  // </div>

  return (
    <div className="clickEmailContact">
      <ToastContainer />
      <Button as="button" onClick={selectAction} type="primary">
        hello@bmediax.dev
      </Button>
    </div>
  );
};

export default DropdownModule;
