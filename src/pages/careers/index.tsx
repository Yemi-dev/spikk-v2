import React from "react";
import JobSection from "@/ui/components/Careers/JobSection";
import HomeHeader from "@/ui/components/Home/HomeHeader";
import HomeFooter from "@/ui/components/Home/HomeFooter";

const CareersPage = () => {
  return (
    <div className='bg-white font-gilroy relative'>
      <HomeHeader />
      <main className='flex flex-col gap-[32px] w-full row-start-2 items-center sm:items-start text-textDark bg-white'>
        <JobSection />
      </main>
      <HomeFooter />
    </div>
  );
};

export default CareersPage;
