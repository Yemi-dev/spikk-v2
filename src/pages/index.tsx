import Brand from "@/ui/components/Landing/Brand";
import Header from "@/ui/components/Landing/Header";
import Hero from "@/ui/components/Landing/Hero";
import ExperienceSection from "@/ui/components/Landing/ExperienceSection";
import ProductDemoSection from "@/ui/components/Landing/ProductDemoSection";
import HowItWorksSection from "@/ui/components/Landing/HowItWorksSection";
import PersonalizedAssistanceSection from "@/ui/components/Landing/PersonalizedAssistanceSection";
import MarketplaceTransparencySection from "@/ui/components/Landing/MarketplaceTransparencySection";
import LandingFooter from "@/ui/components/Landing/LandingFooter";

export default function Home() {
  return (
    <div className='bg-white font-gilroy relative'>
      <Header />
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
  );
}
