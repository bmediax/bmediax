import React from "react"
import { ParallaxProvider } from 'react-scroll-parallax'
import Layout from '../../layout/index'

const CustomLayout = ({ element, props }) => {
  return (
    <ParallaxProvider>
        <Layout {...props}>{element}</Layout>
    </ParallaxProvider>
  )
}

export default CustomLayout
