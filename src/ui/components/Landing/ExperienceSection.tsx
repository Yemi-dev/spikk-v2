import React from "react";
import Image from "next/image";

const ExperienceSection = () => {
  return (
    <section className='w-full bg-[#EEF2F7] py-16 flex flex-col items-center px-4'>
      {/* Pill */}
      <div className='mb-6'>
        <div className='w-full text-gray300 text-center text-[50px] -mb-4'>...</div>
        <span className='inline-block bg-white rounded-3xl px-6 py-2 font-bold mb-8 xs:mb-4 text-2xl xs:text-xl text-black text-center'>
          WE HELP YOU TO EXPERIENCE
        </span>
      </div>
      {/* Heading */}
      <h2 className='text-center text-2xl md:text-[32px] xs:text-base leading-[40px] max-w-[1200px] text-black mb-12 w-full'>
        Whether you need items from your favorite supermarkets, like Bokku.com with its unbeatable prices, or have
        unique errands, we&apos;ve got you covered.
      </h2>
      {/* Phone Images */}
      <div className='w-full overflow-x-auto scrollbar-hide'>
        <div className='flex flex-row gap-6 justify-start items-center mb-10 min-w-max px-4 md:justify-center'>
          <Image
            src='/images/svg/iPhone1.svg'
            alt='Shop Anything'
            width={275}
            height={560}
            className='w-[275px] h-[560px] xs:w-[200px] xs:h-[400px] rounded-2xl shadow-lg shrink-0'
          />
          <Image
            src='/images/svg/iPhone2.svg'
            alt='Main Dashboard'
            width={345}
            height={703}
            className='w-[345px] h-[703px] xs:w-[250px] xs:h-[500px] rounded-2xl shadow-lg shrink-0'
          />
          <Image
            src='/images/png/iPhone3.png'
            alt='Order Summary'
            width={275}
            height={360}
            className='w-[275px] h-[560px] xs:w-[200px] xs:h-[400px] rounded-2xl shadow-lg shrink-0'
          />
        </div>
      </div>
      {/* App Store Badges */}
      <div className='flex flex-row gap-4 mb-8'>
        <a
          className='hover:opacity-80 transition-all duration-200 ease-in-out'
          href='https://apps.apple.com/ng/app/spikk/id1619072479'
          target='_blank'
          rel='noopener noreferrer'>
          <Image src='/images/svg/Appstore.svg' alt='Download on the App Store' width={213} height={71} />
        </a>
        <a
          className='hover:opacity-80 transition-all duration-200 ease-in-out'
          href='https://play.google.com/store/apps/details?id=com.spikk'
          target='_blank'
          rel='noopener noreferrer'>
          <Image src='/images/svg/Playstore.svg' alt='Get it on Google Play' width={239} height={71} />
        </a>
      </div>
      {/* Bottom Description */}
      <h2 className='text-center text-lg md:text-[32px] xs:text-base leading-[40px] max-w-[1200px] text-black mb-12 w-full'>
        Seamless shopping, pickup, and delivery in four simple steps that transform your everyday errands into a
        hassle-free experience.
      </h2>
    </section>
  );
};

export default ExperienceSection;
