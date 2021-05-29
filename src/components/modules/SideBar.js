import React from 'react';
import { RichText } from 'prismic-reactjs'
import * as SideBarStyles from './SideBar.module.scss'

const SideBar = ({ sidebarData, projectLinks }) => {
    // dsi.development_tools === "") 
    const isToolsExist = (dsi) => {
        if (dsi.design_tools.text === "" ) {
            return ""
        } else {
            return (
                <div className={SideBarStyles.section}>
                    <h3>Tools</h3>
                    <RichText render={sidebarData.design_tools.raw} />
                </div>
            )
        }
    }

    const isTechExist = (tsi) => {
        if ( tsi.development_tools.text === "" ) {
            return ""
        } else {
            return (
                <div className={SideBarStyles.section}>
                    <h3>Technologies</h3>
                    <RichText render={sidebarData.development_tools.raw} />
                </div>
            )
        }
    }

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
           {isToolsExist(sidebarData)}
           {isTechExist (sidebarData)}
            <div className={SideBarStyles.section}>
                {/* Deliverable */}
                <h3>Deliverables</h3>
                <RichText render={sidebarData.deliverables.raw} />
            </div>

            <div className={SideBarStyles.section}>
                {projectLinks.map((link, index) => (
                    <a href={link.link.url} 
                        rel="noreferrer" 
                        target="_blank" 
                        key={index} 
                        className="btn primary fullwidth"> {link.label.text} </a>
                ))}
            </div>
        </div>
    );
};

export default SideBar;