import HomeFooter from "@/ui/components/Home/HomeFooter";
import HomeHeader from "@/ui/components/Home/HomeHeader";
import React from "react";
import MarketplaceLanding from "../../ui/components/Marketplace/MarketplaceLanding";
import MarketplaceSEO from "@/ui/components/Marketplace/MarketplaceSEO";

const Marketplace = () => {
  return (
    <>
      <MarketplaceSEO />
      <div className='bg-white font-gilroy relative'>
        <HomeHeader />
        <main className='flex flex-col gap-[32px] w-full row-start-2 items-center sm:items-start text-textDark bg-white'>
          <MarketplaceLanding />
        </main>
        <HomeFooter />
      </div>
    </>
  );
};

export default Marketplace;
