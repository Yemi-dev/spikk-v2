import HomeHeader from "@/ui/components/Home/HomeHeader";
import HomeFooter from "@/ui/components/Home/HomeFooter";
import VendorsLandingSection from "@/ui/components/Vendors/VendorsLandingSection";
import React from "react";

export default function Vendors() {
  return (
    <div className='bg-white font-gilroy relative'>
      <HomeHeader />
      <main className='flex flex-col gap-[32px] w-full row-start-2 items-center sm:items-start text-textDark bg-white'>
        <VendorsLandingSection />
      </main>
      <HomeFooter />
    </div>
  );
}
