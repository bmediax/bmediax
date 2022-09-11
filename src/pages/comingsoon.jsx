import '../styles/comingsoon.scss'

import * as React from "react"

import { AiOutlineCloudDownload } from 'react-icons/ai'
import { Helmet } from 'react-helmet'
import { RiLinksLine } from 'react-icons/ri'
// import DropdownModule from '../components/modules/dropdownModule';
import bmediaxResume from '../assets/files/Bmediax_Resume.pdf'

// markup
const ComingSoon = () => {
  return (
    <div>
      <Helmet>
        <title> Bmediax </title>
      </Helmet>
      <div className="container">
        <div className="wrapper">
          <h4 style={{ textAlign: "center", marginBottom:"10px" }}>Coming Soon...</h4>
          <h1> Website Under Construction </h1>
          <div className="links-media">
            {/* <DropdownModule /> */}
            <a href="https://bmediax.com" className="btn ghost"> View Portfolio <RiLinksLine /></a>
            <a href={bmediaxResume} download="Bmediax_Resume" className="btn ghost"> Download Resume <AiOutlineCloudDownload /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon
