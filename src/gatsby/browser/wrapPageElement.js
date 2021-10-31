import React from "react";
import Layout from "../../layout/index";
import { ParallaxProvider } from "react-scroll-parallax";

const CustomLayout = ({ element, props }) => {
  return (
    <ParallaxProvider>
      <Layout {...props}>{element}</Layout>
    </ParallaxProvider>
  );
};

export default CustomLayout;
