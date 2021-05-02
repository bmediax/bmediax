import * as React from "react"
import { Helmet } from 'react-helmet'
import { RiLinksLine } from 'react-icons/ri'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import '../styles/comingsoon.scss'
import bmediaxPortfolio from '../assets/files/Bmediax_Resume.pdf'

// markup
const IndexPage = () => {
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
            <a href="https://bmediax.com" className="btn primary activePrimary"> View Portfolio <RiLinksLine /></a>
            <a href="https://bmediax.com" className="btn ghost"> View Portfolio <RiLinksLine /></a>
            {/* <a href={bmediaxPortfolio} download="Bmediax_Resume"> Download Résumé <AiOutlineCloudDownload /></a> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
