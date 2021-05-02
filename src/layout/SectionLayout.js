import React from 'react';

const SectionLayout = ({ title, subtitle, isDark, children, label, bgColor }) => {
    return (
        <section className={label} style={{ backgroundColor: bgColor }}>
            <div className={`section-title ${isDark ? 'darkTitle' : null }`}>
                <h4>{subtitle}</h4>
                <h2>{title}</h2>
            </div>
            {children}
        </section>
    );
};

export default SectionLayout;