import React from 'react';
import * as SideBarStyles from './SideBar.module.scss'

const SideBar = ({ sidebarData }) => {
    return (
        <div className={SideBarStyles.wrapper}>
            {/* Role */}
            <div className={SideBarStyles.section}>
                <h3>Role</h3>
                <ul>
                    {sidebarData.role.map((roles, index) => (
                        <li key={index}>{roles.text}</li>
                    ))}
                </ul>
            </div>
            <div className={SideBarStyles.section}>
                {/* Work */}
                <h3>Work</h3>
                <ul>
                    {sidebarData.work.map((works, index) => (
                        <li key={index}>{works.text}</li>
                    ))}
                </ul>
            </div>

            <div className={SideBarStyles.section}>
                {/* Deliverable */}
                <h3>Deliverables</h3>
                <ul>
                    {sidebarData.deliverables.map((deliver, index) => (
                        <li key={index}>{deliver.text}</li>
                    ))}
                </ul>
            </div>

            <div className={SideBarStyles.section}>
                <a href={sidebarData.project_link.url} rel="noreferrer" target="_blank" className="btn primary fullwidth"> View Project </a>
            </div>
        </div>
    );
};

export default SideBar;