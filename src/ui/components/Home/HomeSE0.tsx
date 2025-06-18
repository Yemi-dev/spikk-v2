import React from 'react'
import SEOHead from '../SEO/SEOHead'

const HomeSE0 = () => {
  return (
    <SEOHead
        title='Spikk - Shop and Send Quality Products with Fast Delivery'
        description='Discover Spikk, the leading marketplace platform offering fast delivery, quality products, and personalized assistance. Shop groceries, essentials, wellness products, and more with transparent pricing and reliable service.'
        keywords='Spikk, marketplace, fast delivery, groceries, essentials, wellness products, online shopping, Nigeria, e-commerce, quality products, transparent pricing, personalized assistance, same day delivery'
        image='/images/png/Banner.png'
        url='https://spikk.com'
        type='website'
        tags={["marketplace", "delivery", "groceries", "essentials", "wellness", "Nigeria", "e-commerce"]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Spikk",
          url: "https://spikk.com",
          description: "Your trusted marketplace for fast delivery and quality products",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://spikk.com/marketplace?search={search_term_string}",
            "query-input": "required name=search_term_string",
          },
          publisher: {
            "@type": "Organization",
            name: "Spikk",
            logo: {
              "@type": "ImageObject",
              url: "https://spikk.com/images/svg/Spikk-logo.svg",
            },
          },
        }}
      />
  )
}

export default HomeSE0