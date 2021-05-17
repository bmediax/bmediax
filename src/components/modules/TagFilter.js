import React from 'react';
import * as TagFilterStyles from './TagFilter.module.scss'

const TagFilter = ({items}) => {
    return (
        <div className={TagFilterStyles.container}>
            <ul className={TagFilterStyles.wrapper}>
                <li className={TagFilterStyles.selectedTag}>All</li>
                <li>Graphics</li>
                <li>Motion</li>
                <li>Iconography</li>
                <li>Illustration</li>
                <li>Photography</li>
            </ul>
        </div>
    );
};

export default TagFilter;