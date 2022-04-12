import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import React from 'react';
import * as SideBarStyles from './SideBar.module.scss';

const SideBar = ({ sidebarData, projectLinks }) => {
    const isToolsExist = (dsi) => {
        if (dsi.design_tools.text === "" ) {
            return ""
        } else {
            return (
                <div className={SideBarStyles.section}>
                    <h3>Tools</h3>
                    <RichText render={sidebarData.design_tools.richText} />
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
                    <RichText render={sidebarData.development_tools.richText} />
                </div>
            )
        }
    }

    return (
        <div className={SideBarStyles.wrapper}>
            {/* Role */}
            <div className={SideBarStyles.section}>
                <h3>Role</h3>
                <RichText render={sidebarData.role.richText} />
                {/* {RichText.asText(sidebarData.role.richText)} */}
                {/* {sidebarData.role.html} */}
            </div>

            <div className={SideBarStyles.section}>
                {/* Work */}
                <h3>Work</h3>
                <RichText render={sidebarData.work.richText} />
            </div>
           {isToolsExist(sidebarData)}
           {isTechExist (sidebarData)}
            <div className={`${SideBarStyles.section} ${SideBarStyles.sectionDeliver}`}>
                {/* Deliverable */}
                <h3>Deliverables</h3>
                <RichText render={sidebarData.deliverables.richText} />
            </div>

            <div className={SideBarStyles.section}>
                {projectLinks.map((link, index) => (
                    <a href={link.link.url} 
                        rel="noreferrer" 
                        target="_blank" 
                        key={index} 
                        className="button button-primary fullwidth"> {link.label.text} </a>
                ))}
            </div>
        </div>
    );
};

SideBar.propTypes = {
    sidebarData: PropTypes.object.isRequired,
    projectLinks: PropTypes.array.isRequired,
}

export default SideBar;