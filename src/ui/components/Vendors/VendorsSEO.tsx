import React from "react";
import SEOHead from "../SEO/SEOHead";

const VendorsSEO = () => {
  return (
    <SEOHead
      title='Partner with Spikk - Grow Your Business with Our Marketplace Platform'
      description='Join Spikk as a vendor and reach millions of customers. Sell your products on our trusted marketplace platform with transparent pricing, fast delivery, and excellent customer support.'
      keywords='Spikk vendor partnership, sell on Spikk, marketplace vendor, business partnership, e-commerce platform, vendor registration, product listing, Nigeria marketplace'
      image='/images/png/VendorsLeft.png'
      url='https://spikk.com/vendors'
      type='website'
      tags={["vendor", "partnership", "business", "marketplace", "e-commerce", "Nigeria"]}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Spikk Vendor Program",
        url: "https://spikk.com/vendors",
        description: "Partner with Spikk to grow your business and reach more customers",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          availableLanguage: "English",
          email: "vendors@spikk.com",
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "NG",
          addressRegion: "Lagos",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Vendor Partnership Benefits",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Marketplace Access",
                description: "Access to millions of potential customers",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Fast Delivery Network",
                description: "Utilize our efficient delivery infrastructure",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Transparent Pricing",
                description: "Clear and fair pricing structure",
              },
            },
          ],
        },
      }}
    />
  );
};

export default VendorsSEO;
