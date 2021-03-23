import * as React from "react"
import { Helmet } from 'react-helmet'
import { RiLinksLine } from 'react-icons/ri'
import '../styles/comingsoon.scss'

// markup
const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <title> Bmediax </title>
      </Helmet>
      <div className="container">
        <div className="wrapper">
          <h1> Website Under Construction </h1>
          <a href="https://bmediax.com"> View Portfolio <RiLinksLine /></a>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
