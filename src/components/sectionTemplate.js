import React from 'react';
import SectionLayout from '../layout/SectionLayout';
import SectionLink from './SectionLink';

const sectionTemplate = () => {
    return (
        <SectionLayout title="Title" subtitle="Subtitle">
            {/* Content */}
            <SectionLink path="/link" type="primary">
                button
            </SectionLink>
        </SectionLayout>
    );
};

export default sectionTemplate;