import Head from "next/head";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "product";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  structuredData?: object;
}

export default function SEOHead({
  title = "Spikk - Your Trusted Marketplace for Fast Delivery & Quality Products",
  description = "Discover Spikk, the leading marketplace platform offering fast delivery, quality products, and personalized assistance. Shop groceries, essentials, wellness products, and more with transparent pricing and reliable service.",
  keywords = "Spikk, marketplace, fast delivery, groceries, essentials, wellness products, online shopping, Nigeria, e-commerce, quality products, transparent pricing, personalized assistance",
  image = "/images/png/Banner.png",
  url = "https://spikk.com",
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Spikk Team",
  section,
  tags = ["marketplace", "delivery", "groceries", "essentials", "wellness"],
  structuredData,
}: SEOHeadProps) {
  const defaultStructuredData = {
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
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name='title' content={title} />
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta name='author' content={author} />
      <meta name='robots' content='index, follow' />
      <meta name='language' content='English' />
      <meta name='revisit-after' content='7 days' />
      <meta name='distribution' content='global' />
      <meta name='rating' content='general' />

      {/* Open Graph / Facebook */}
      <meta property='og:type' content={type} />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:site_name' content='Spikk' />
      <meta property='og:locale' content='en_US' />

      {/* Twitter */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={url} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={image} />
      <meta property='twitter:site' content='@spikk' />
      <meta property='twitter:creator' content='@spikk' />

      {/* Additional Meta Tags */}
      {publishedTime && <meta property='article:published_time' content={publishedTime} />}
      {modifiedTime && <meta property='article:modified_time' content={modifiedTime} />}
      {section && <meta property='article:section' content={section} />}
      {tags.map((tag, index) => (
        <meta key={index} property='article:tag' content={tag} />
      ))}

      {/* Canonical URL */}
      <link rel='canonical' href={url} />

      {/* Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData),
        }}
      />

      {/* Additional SEO Meta Tags */}
      <meta name='application-name' content='Spikk' />
      <meta name='apple-mobile-web-app-title' content='Spikk' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='format-detection' content='telephone=no' />
      <meta name='mobile-web-app-capable' content='yes' />

      {/* Search Engine Optimization */}
      <meta name='google-site-verification' content='your-verification-code' />
      <meta name='msvalidate.01' content='your-bing-verification-code' />

      {/* Performance Optimization */}
      <link rel='preload' href='/fonts/Gilroy-Regular.ttf' as='font' type='font/ttf' crossOrigin='anonymous' />
      <link rel='preload' href='/fonts/Gilroy-Bold.ttf' as='font' type='font/ttf' crossOrigin='anonymous' />
    </Head>
  );
}
