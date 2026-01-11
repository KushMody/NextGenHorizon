import React from 'react';
import { Helmet } from 'react-helmet-async';
import content from '../data/content.json';

const SEO = ({ title, description, canonical, type = 'website' }) => {
    const siteTitle = content.header.companyName;
    const siteDescription = content.hero.description; // Default fallback

    const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const metaDescription = description || siteDescription;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDescription} />
        </Helmet>
    );
};

export default SEO;
