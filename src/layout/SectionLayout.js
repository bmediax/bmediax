import React from 'react';

const SectionLayout = ({ children, ide }) => {
    return (
        <section id={ide}>
            {children}
        </section>
    );
};

export default SectionLayout;