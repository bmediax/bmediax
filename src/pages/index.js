import * as React from "react"
import { Helmet } from 'react-helmet'
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
          <a href="https://bmediax.com"> View Portfolio </a>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
