import React from "react";
import SEOHead from "../SEO/SEOHead";

const MarketplaceSEO = () => {
  return (
    <SEOHead
      title='Spikk Marketplace - Shop and Send Quality Products with Fast Delivery'
      description="Explore Spikk's marketplace for groceries, essentials, wellness products, and more. Enjoy fast delivery, transparent pricing, and quality products. Shop now for the best deals!"
      keywords='Spikk marketplace, online shopping, groceries, essentials, wellness products, fast delivery, quality products, Nigeria marketplace, e-commerce shopping'
      image='/images/png/Marketplace.png'
      url='https://spikk.com/marketplace'
      type='website'
      tags={["marketplace", "shopping", "groceries", "essentials", "wellness", "e-commerce", "delivery", "sending", "drinks in Lagos", "online market", "Nigeria", "Lagos", "Nigerian market", "online shopping", "online delivery", "online groceries", "online essentials", "online wellness products", "online delivery", "online sending", "online shopping in Nigeria", "online delivery in Nigeria", "online groceries in Nigeria", "online essentials in Nigeria", "online wellness products in Nigeria"]}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "Store",
        name: "Spikk Marketplace",
        url: "https://spikk.com/marketplace",
        description: "Online marketplace for groceries, essentials, and wellness products",
        address: {
          "@type": "PostalAddress",
          addressCountry: "NG",
          addressRegion: "Lagos",
        },
        telephone: "+234-XXX-XXX-XXXX",
        email: "support@spikk.com",
        openingHours: "Mo-Su 00:00-23:59",
        paymentAccepted: "Cash, Credit Card, Bank Transfer, Mobile Money",
        currenciesAccepted: "NGN",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Spikk Products",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Groceries",
                description: "Fresh groceries and food items",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Essentials",
                description: "Household essentials and daily needs",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Wellness Products",
                description: "Health and wellness products",
              },
            },
          ],
        },
      }}
    />
  );
};

export default MarketplaceSEO;
