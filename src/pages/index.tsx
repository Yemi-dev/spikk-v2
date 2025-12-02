import Brand from "@/ui/components/Landing/Brand";
import Hero from "@/ui/components/Landing/Hero";
import ExperienceSection from "@/ui/components/Landing/ExperienceSection";
import ProductDemoSection from "@/ui/components/Landing/ProductDemoSection";
import HowItWorksSection from "@/ui/components/Landing/HowItWorksSection";
import PersonalizedAssistanceSection from "@/ui/components/Landing/PersonalizedAssistanceSection";
import MarketplaceTransparencySection from "@/ui/components/Landing/MarketplaceTransparencySection";
import LandingFooter from "@/ui/components/Landing/LandingFooter";
import SEOHead from "@/ui/components/SEO/SEOHead";
import HomeHeader from "@/ui/components/Home/HomeHeader";

export default function Home() {
  return (
    <>
      <SEOHead
        title='Spikk - Your Trusted Marketplace for Fast Delivery & Quality Products'
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
      <div className='bg-white font-gilroy relative'>
        <HomeHeader />
        <main className='flex flex-col w-full row-start-2 items-center sm:items-start text-textDark bg-white'>
          <Hero />
          <Brand />
          <ExperienceSection />
          <ProductDemoSection />
          <HowItWorksSection />
          <PersonalizedAssistanceSection />
          <MarketplaceTransparencySection />
        </main>
        <LandingFooter />
      </div>
    </>
  );
}
