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
        <h1> Website Under Construction </h1>
        <button> View Portfolio </button>
      </div>
    </div>
  )
}

export default IndexPage
