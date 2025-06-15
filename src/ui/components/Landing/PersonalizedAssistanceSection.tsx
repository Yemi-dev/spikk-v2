import React from "react";
import Image from "next/image";
import CustomButton from "../../atoms/CustomButton";
import { colors } from "@/constants/colors";
import Divider from "../../atoms/Divider";
import { useRouter } from "next/router";

const PersonalizedAssistanceSection = () => {
  const router = useRouter();
  return (
    <section className='w-full bg-black py-20 flex flex-col items-center justify-center px-4 gap-10 md:gap-20'>
      <div className='flex flex-col items-center justify-center'>
        <div className='mb-4'>
          <div className='w-full text-gray800 text-center text-[50px] -mb-4'>...</div>
          <span className='inline-block bg-[#232323] text-white rounded-full px-6 py-2 font-semibold text-base tracking-wide mb-4'>
            WHY SPIKK
          </span>
        </div>
        <h2 className='text-white text-3xl md:text-5xl font-bold mb-4 leading-tight'>Save time, Stay hassle free</h2>
        <p className='text-gray500 text-lg mb-8 max-w-lg'>
          At Spikk, we&apos;re more than just a delivery service. We&apos;re your time-saving partner, built for
          convenience and reliability.
        </p>
      </div>

      <div className='flex xlg:flex-col gap-10 items-center justify-center w-full'>
        {/* Left Content */}
        <div className='flex-1 max-w-xl flex justify-center items-center text-left mb-10 md:mb-0'>
          <div className='mb-8'>
            <h3 className='text-white text-2xl font-semibold mb-2'>Personalized Assistance</h3>
            <p className='text-gray500 text-base mb-6 max-w-md'>
              Every Spikker request is handled with care by our dedicated Pikkers, ensuring exceptional service,
              timeliness, and customer satisfaction.
            </p>
            <ul className='mb-6 space-y-3'>
              <Divider thick={1} />
              <li className='flex items-center gap-2 text-yellow700 text-base'>
                {/* Icon */}
                <Image src='/images/svg/Check.svg' alt='Check' width={20} height={20} />
                <span className='text-white ml-2'>Spikk provide 24/7 real-time support</span>
              </li>
              <Divider thick={1} margin='10px 0 0 0' />
              <li className='flex items-center gap-2 text-yellow700 text-base'>
                <Image src='/images/svg/Check.svg' alt='Check' width={20} height={20} />
                <span className='text-white ml-2'>Advanced tracking ensures transparency</span>
              </li>
              <Divider thick={1} margin='10px 0 0 0' />
            </ul>
            <CustomButton
              bgColor={colors.yellow700}
              color='#232323'
              onClick={() => router.push("/home#how-it-works")}
              className='font-bold px-6 py-3 text-base mt-2 hover:opacity-90 transition-all'>
              LEARN MORE
              <svg className='ml-2' width='18' height='18' fill='none' viewBox='0 0 18 18'>
                <path d='M7 13l5-4-5-4' stroke='#232323' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
              </svg>
            </CustomButton>
          </div>
        </div>
        {/* Right Image */}
        <div className='flex-1 flex items-center justify-center w-full max-w-md'>
          <div className='relative w-full max-w-[400px]'>
            <Image
              src='/images/png/Assistance.png'
              alt='Personalized Assistance'
              width={400}
              height={400}
              className='rounded-2xl object-cover w-full h-auto shadow-2xl'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedAssistanceSection;
