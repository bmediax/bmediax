import "../styles/reset.css";
import "../styles/_base.scss";

import { AnimatePresence, motion } from "framer-motion";

import FriendsSection from "../components/FriendsSection.js";
import Nav from "../components/Nav";
import React from "react";
import Seo from "../components/Seo";
import WorkSection from "../components/WorkSection";

const Layout = ({ children, title, descr, darkNav, imgSrc, uid }) => {
  return (
    <div id={title}>
      <Seo title={title} description={descr} metaImage={imgSrc} pathname={uid} />
      <Nav theme={darkNav} />
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.6 }}
          style={{paddingTop:"70px"}}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <FriendsSection />
      <WorkSection />
    </div>
  );
};

export default Layout;
