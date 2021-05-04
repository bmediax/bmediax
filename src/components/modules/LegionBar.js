import React from 'react';
import * as legionStyles from './LegionBar.module.scss'

const LegionBar = () => {
    return (
        // Legion Container
        <div className={legionStyles.container}>
            {/* Legion Wrapper */}
            <ul className={legionStyles.wrapper}>
                {/* Legion Options */}
                <li><a href="#overview">Overview</a></li>
                <li><a href="#design">Design</a></li>
                <li><a href="#results">Results</a></li>
            </ul>
        </div>
    );
};

export default LegionBar;