import React from 'react';
import * as SideBarStyles from './SideBar.module.scss'

const SideBar = () => {
    return (
        <div className={SideBarStyles.wrapper}>
            {/* Role */}
            <div className={SideBarStyles.section}>
                <h3>Role</h3>
                <ul>
                    <li>Web Designer</li>
                </ul>
            </div>
            <div className={SideBarStyles.section}>
                {/* Work */}
                <h3>Work</h3>
                <ul>
                    <li>Web Development</li>
                </ul>
            </div>

            <div className={SideBarStyles.section}>
                {/* Deliverable */}
                <h3>Deliveriable</h3>
                <ul>
                    <li>Gatsby SPA Website</li>
                    <li>Headless CMS Integration</li>
                </ul>
            </div>

            <div className={SideBarStyles.section}>
                <a href="https://google.com" className="btn primary fullwidth"> View Project </a>
            </div>
        </div>
    );
};

export default SideBar;