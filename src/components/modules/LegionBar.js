import React from 'react';
import * as legionStyles from './LegionBar.module.scss'

const LegionBar = () => {
    return (
        <div className={legionStyles.container}>
            <ul className={legionStyles.wrapper}>
                <li><a href="#overview">Overview</a></li>
                <li><a href="#design">Design</a></li>
                <li><a href="#results">Results</a></li>
            </ul>
        </div>
    );
};

export default LegionBar;