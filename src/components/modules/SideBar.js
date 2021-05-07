import React from 'react';
import { RichText } from 'prismic-reactjs'
import * as SideBarStyles from './SideBar.module.scss'

const SideBar = ({ sidebarData }) => {
    return (
        <div className={SideBarStyles.wrapper}>
            {/* Role */}
            <div className={SideBarStyles.section}>
                <h3>Role</h3>
                <RichText render={sidebarData.role.raw} />
                {/* {RichText.asText(sidebarData.role.raw)} */}
                {/* {sidebarData.role.html} */}
            </div>
            <div className={SideBarStyles.section}>
                {/* Work */}
                <h3>Work</h3>
                <RichText render={sidebarData.work.raw} />
            </div>

            <div className={SideBarStyles.section}>
                {/* Deliverable */}
                <h3>Deliverables</h3>
                <RichText render={sidebarData.deliverables.raw} />
            </div>

            <div className={SideBarStyles.section}>
                <a href={sidebarData.project_link.url} rel="noreferrer" target="_blank" className="btn primary fullwidth"> View Project </a>
            </div>
        </div>
    );
};

export default SideBar;