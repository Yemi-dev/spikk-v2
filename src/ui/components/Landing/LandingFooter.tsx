import Image from "next/image";
import React from "react";

const LandingFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='flex bg-black'>
      <div className='flex flex-col items-center justify-center max-w-6xl mx-auto my-10'>
        <Image src='/images/svg/Spikk-logo2.svg' alt='Footer' width={63} height={25} />
        <div className='mt-6'>
          {" "}
          <span>© {currentYear}.</span> All rights reserved
        </div>
      </div>
    </div>
  );
};

export default LandingFooter;
