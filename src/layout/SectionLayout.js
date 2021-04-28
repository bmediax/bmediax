import React from 'react';

const SectionLayout = ({ children, label, bgColor }) => {
    return (
        <section className={label} style={{ backgroundColor: bgColor }}>
            {children}
        </section>
    );
};

export default SectionLayout;