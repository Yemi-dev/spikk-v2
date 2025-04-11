import Image from "next/image";
import React from "react";
import CustomButton from "../atoms/CustomButton";
import { GoArrowUpRight } from "react-icons/go";

const Hero: React.FC<{ setOpenWaitlist: (value: boolean) => void }> = ({ setOpenWaitlist }) => {
  return (
    <div className='font-delight mt-[4rem] md:px-8 sm:px-6 px-4'>
      <div className='flex flex-col gap-[32px] row-start-2 items-center justify-center'>
        <h1 className='md:text-[70px] text-[48px] md:leading-[90px] leading-[60px] font-semibold max-w-[950px] mx-auto text-center'>
          Take control of your finances{" "}
          <span className='inline-block align-middle'>
            <Image src='/images/svg/heroSvg.svg' alt='Logo' width={155} height={86} className='inline sm:w-[100px]' />
          </span>{" "}
          with Finverse
        </h1>
        <p className='md:text-2xl text-lg text-textGray text-center '>
          Your Financial Bestie – Spend Smarter, Live Freer.
        </p>
        <CustomButton
          onClick={() => setOpenWaitlist(true)}
          padding='10px 1.5rem'
          className='hidden md:block font-semibold text-lg'>
          Join the waitlist <GoArrowUpRight size={20} className='font-light' />
        </CustomButton>
      </div>
      <div className='w-full mx-auto mt-10 flex justify-center items-center sm:hidden'>
        <div className='relative w-[520px] h-[400px]'>
          <Image
            src='/images/svg/mobile.svg'
            alt='Hero Image'
            width={100}
            height={100}
            className=' w-[520px] h-[400px]'
          />
          <Image
            src='/images/svg/goals.svg'
            alt='Hero Image'
            width={100}
            height={100}
            className='absolute top-14 right-[-120px] w-[290px] h-[140px] z-10'
          />
          <Image
            src='/images/svg/expenses.svg'
            alt='Hero Image'
            width={100}
            height={100}
            className='absolute bottom-10 left-[-100px] w-[290px] h-[230px] z-10'
          />
          <Image
            src='/images/svg/pointer.svg'
            alt='Hero Image'
            width={100}
            height={100}
            className='absolute bottom-10 right-[-60px] w-[240px] h-[73px] z-10'
          />
        </div>
      </div>
      <div className='md:hidden flex items-center justify-center mt-10 mx-auto'>
        <Image
          src='/images/svg/heroGroup.svg'
          alt='Hero Image'
          width={100}
          height={100}
          className='w-[950px] h-[250px]'
        />
      </div>
    </div>
  );
};

export default Hero;
