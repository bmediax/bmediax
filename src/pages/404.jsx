import * as React from "react"
import { Link } from "gatsby"
import { BiArrowBack } from 'react-icons/bi'
import SectionPageLayout from '../layout/SectionPageLayout';
import Layout from '../layout/index.js'
import * as notfoundStyles from '../styles/404.module.scss'

// markup
const NotFoundPage = () => {
  return (
    <Layout title="404 - Not Found">
      <SectionPageLayout label={notfoundStyles.fourofour} title="404" bigTitle>
        <div className={notfoundStyles.wrapper}>
          <p>We couldn't find what you were looking for :(</p>
          <Link to={'/'} className="btn ghost">
            <BiArrowBack />Back to Home</Link>
        </div>
      </SectionPageLayout>
    </Layout>
  )
}

export default NotFoundPage
