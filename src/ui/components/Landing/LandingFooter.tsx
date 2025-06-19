
import SpikkLogo from "@/ui/atoms/SpikkLogo";
import React from "react";

const LandingFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='flex bg-black'>
      <div className='flex flex-col items-center justify-center max-w-6xl mx-auto my-10'>
        <SpikkLogo width={93} height={45} textFill='white' dotFill='white' />
        <div className='mt-6 text-soft400'>
          {" "}
          <span>© {currentYear}.</span> All rights reserved
        </div>
      </div>
    </div>
  );
};

export default LandingFooter;
