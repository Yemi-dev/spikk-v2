export const SEO_CONFIG = {
  // Default SEO settings
  default: {
    title: "Spikk - Your Trusted Marketplace for Fast Delivery & Quality Products",
    description:
      "Discover Spikk, the leading marketplace platform offering fast delivery, quality products, and personalized assistance. Shop groceries, essentials, wellness products, and more with transparent pricing and reliable service.",
    keywords:
      "Spikk, marketplace, fast delivery, groceries, essentials, wellness products, online shopping, Nigeria, e-commerce, quality products, transparent pricing, personalized assistance",
    image: "/images/png/Banner.png",
    url: "https://spikk.com",
    type: "website" as const,
    tags: ["marketplace", "delivery", "groceries", "essentials", "wellness", "Nigeria", "e-commerce"],
  },

  // Page-specific SEO settings
  pages: {
    home: {
      title: "Spikk - Your Trusted Marketplace for Fast Delivery & Quality Products",
      description:
        "Discover Spikk, the leading marketplace platform offering fast delivery, quality products, and personalized assistance. Shop groceries, essentials, wellness products, and more with transparent pricing and reliable service.",
      keywords:
        "Spikk, marketplace, fast delivery, groceries, essentials, wellness products, online shopping, Nigeria, e-commerce, quality products, transparent pricing, personalized assistance, same day delivery",
      image: "/images/png/Banner.png",
      url: "https://spikk.com",
      type: "website" as const,
      tags: ["marketplace", "delivery", "groceries", "essentials", "wellness", "Nigeria", "e-commerce"],
    },

    marketplace: {
      title: "Spikk Marketplace - Shop Quality Products with Fast Delivery",
      description:
        "Explore Spikk's marketplace for groceries, essentials, wellness products, and more. Enjoy fast delivery, transparent pricing, and quality products. Shop now for the best deals!",
      keywords:
        "Spikk marketplace, online shopping, groceries, essentials, wellness products, fast delivery, quality products, Nigeria marketplace, e-commerce shopping",
      image: "/images/png/Marketplace.png",
      url: "https://spikk.com/marketplace",
      type: "website" as const,
      tags: ["marketplace", "shopping", "groceries", "essentials", "wellness", "e-commerce"],
    },

    careers: {
      title: "Careers at Spikk - Join Our Team and Build the Future of E-commerce",
      description:
        "Join Spikk's dynamic team and help shape the future of e-commerce in Nigeria. Explore exciting career opportunities in technology, operations, marketing, and more. Apply now!",
      keywords:
        "Spikk careers, job opportunities, Nigeria jobs, e-commerce careers, technology jobs, marketing jobs, operations jobs, join Spikk team",
      image: "/images/png/Assistance.png",
      url: "https://spikk.com/careers",
      type: "website" as const,
      tags: ["careers", "jobs", "employment", "Nigeria", "e-commerce", "technology"],
    },

    vendors: {
      title: "Partner with Spikk - Grow Your Business with Our Marketplace Platform",
      description:
        "Join Spikk as a vendor and reach millions of customers. Sell your products on our trusted marketplace platform with transparent pricing, fast delivery, and excellent customer support.",
      keywords:
        "Spikk vendor partnership, sell on Spikk, marketplace vendor, business partnership, e-commerce platform, vendor registration, product listing, Nigeria marketplace",
      image: "/images/png/VendorsLeft.png",
      url: "https://spikk.com/vendors",
      type: "website" as const,
      tags: ["vendor", "partnership", "business", "marketplace", "e-commerce", "Nigeria"],
    },

    cart: {
      title: "Shopping Cart - Spikk Marketplace",
      description:
        "Review your shopping cart items on Spikk. Secure checkout with fast delivery and quality products guaranteed.",
      keywords: "Spikk cart, shopping cart, checkout, secure payment, fast delivery",
      image: "/images/png/Banner.png",
      url: "https://spikk.com/cart",
      type: "website" as const,
      tags: ["cart", "checkout", "shopping", "payment"],
    },
  },

  // Social media handles
  social: {
    facebook: "https://facebook.com/spikk",
    twitter: "https://twitter.com/spikk",
    instagram: "https://instagram.com/spikk",
    linkedin: "https://linkedin.com/company/spikk",
    whatsapp: "https://wa.me/234XXXXXXXXX",
  },

  // Contact information
  contact: {
    email: "support@spikk.com",
    phone: "+234-XXX-XXX-XXXX",
    address: "Lagos, Nigeria",
  },

  // Business information
  business: {
    name: "Spikk",
    legalName: "Spikk Limited",
    founded: "2024",
    industry: "E-commerce",
    category: "Marketplace",
    country: "Nigeria",
    currency: "NGN",
  },
};

// Structured data templates
export const STRUCTURED_DATA = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Spikk",
    url: "https://spikk.com",
    logo: "https://spikk.com/images/svg/Spikk-logo.svg",
    description: "Your trusted marketplace for fast delivery and quality products",
    sameAs: [
      "https://facebook.com/spikk",
      "https://twitter.com/spikk",
      "https://instagram.com/spikk",
      "https://linkedin.com/company/spikk",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+234-XXX-XXX-XXXX",
      contactType: "customer service",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG",
      addressRegion: "Lagos",
    },
  },

  website: {
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
  },

  store: {
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
  },
};
