import Image from "next/image";
import React from "react";
import CustomButton from "../atoms/CustomButton";
import { GoArrowUpRight } from "react-icons/go";
import { colors } from "@/constants/colors";

const Waitlist: React.FC<{ setOpenWaitlist: (value: boolean) => void }> = ({ setOpenWaitlist }) => {
  return (
    <div
      id='feature'
      className=' w-full mt-[-2rem] md:max-h-[500px] overflow-hidden max-w-[1200px] bg-bgPurple rounded-[40px]'>
      <div className='mx-auto flex gap-16 items-start py-20 md:px-12 px-6 relative'>
        <div className='text-white text-5xl w-[70%] sm:w-full leading-[60px] text-left sm:text-[36px] sm:leading-12 sm:text-center'>
          <h1>
            <span className='text-textYellow'>Budget</span>, <span className='text-textYellow'>track</span> and feel
            good about your money with Finverse
          </h1>
          <p className='text-xl text-white leading-[40px] w-[80%] sm:w-full mb-4 sm:my-6'>
            Join the waitlist to be the first to experience Finverse and start your journey to financial clarity.
          </p>
          <div className='sm:w-fit sm:mx-auto'>
            <CustomButton
              background='none'
              bgColor={colors.textYellow}
              color={colors.textDark}
              onClick={() => setOpenWaitlist(true)}
              padding='10px 1.5rem'
              className='md:block font-semibold text-lg sm:mx-auto'>
              Join the waitlist <GoArrowUpRight size={20} className='font-light' />
            </CustomButton>
          </div>
        </div>
        <Image
          src='/images/svg/Subtract.svg'
          alt='Hero Image'
          width={100}
          height={100}
          className=' w-[385px] h-[414px] mt-10 absolute right-[100px] top-0 sm:hidden'
        />
      </div>
    </div>
  );
};

export default Waitlist;
