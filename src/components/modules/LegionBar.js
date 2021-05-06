import React from 'react';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import * as legionStyles from './LegionBar.module.scss'

const LegionBar = () => {
    return (
        // Legion Container
        <div className={legionStyles.container}>
            {/* Legion Wrapper */}
            <ul className={legionStyles.wrapper}>
                {/* Legion Options */}
                <li><AnchorLink to="reikoforpcc/#overview" title="Overview" /></li>
                <li><AnchorLink to="#design" title="Design" /></li>
                <li><AnchorLink to="#results" title="Results" /></li>
            </ul>
        </div>
    );
};

export default LegionBar;