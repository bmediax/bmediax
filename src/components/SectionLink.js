import React from 'react';
import { Link } from 'gatsby'

const SectionLink = ({ path, children, type, classes}) => (
    <div className="section-link">
        <Link to={path}>
            <button className={`btn ${type ? type : ''} ${classes ? classes : ''}`}>
                {children}
            </button>
        </Link>
    </div>
)

export default SectionLink;