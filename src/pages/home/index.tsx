import HomeHeader from "@/ui/components/Home/HomeHeader";
import Hero from "@/ui/components/Landing/Hero";
import HomeFooter from "@/ui/components/Home/HomeFooter";
import React from "react";
import Categories from "@/ui/components/Home/Categories";
import HowItWorksSection from "@/ui/components/Home/HowItWorksSection";
import WhySpikkSection from "@/ui/components/Home/WhySpikkSection";
import GetStartedSection from "@/ui/components/Home/GetStartedSection";

export default function Homepage() {
  return (
    <div className='bg-white font-gilroy relative'>
      <HomeHeader />
      <main className='flex flex-col gap-[32px] w-full row-start-2 items-center sm:items-start text-textDark bg-white'>
        <Hero isHome />
        <Categories />
        <HowItWorksSection />
        <WhySpikkSection />
        <GetStartedSection />
      </main>
      <HomeFooter />
    </div>
  );
}
