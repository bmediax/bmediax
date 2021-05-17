import React from 'react';
// import { StaticImage } from 'gatsby-plugin-image'
// import * as variables from '../styles/_variables.module.scss'
import SectionPageLayout from '../layout/SectionPageLayout';
import Layout from '../layout/index.js'
import TagFilter from '../components/modules/TagFilter';

const work = () => {
    return (
        <Layout title="Work">
            <SectionPageLayout label="page" title="Work">
                <div className="pageColumnLayout sectionMaxWidth">
                    <TagFilter />
                </div>
            </SectionPageLayout>
        </Layout>
    )
}

export default work;