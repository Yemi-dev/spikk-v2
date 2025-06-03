import React, { JSX } from "react";
import CustomButton from "../atoms/CustomButton";
import { useRouter } from "next/router";
import Image from "next/image";
import { colors } from "@/constants/colors";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

const Footer = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className='w-full'>
      <div className=' bg-bgPurple'>
        <div className='py-20 max-w-[1200px] mx-auto flex xlg:flex-wrap sm:gap-14 gap-6 justify-between items-start px-14 xs:px-6 text-white'>
          <div className='w-1/3 sm:w-fit sm:mx-auto sm:text-center'>
            <button onClick={() => router.push("/")} className={"cursor-pointer"}>
              <Image src='/images/svg/logoWhite.svg' alt='Logo' width={160} height={100} />
            </button>
            <p className='mt-2 text-justify font-medium text-2xl sm:w-full'>-your financial bestie</p>
            <p className='mt-2 text-justify text-sm sm:w-full'>Manage your finances the healthy way</p>
            <div className='flex gap-4 mt-6 sm:mx-auto  sm:w-fit'>
              <button onClick={() => router.push("/")} className={"cursor-pointer"}>
                <Image
                  src='/images/svg/YoutubeLogo.svg'
                  alt='Logo'
                  width={160}
                  height={100}
                  className='w-[25px] h-[25px]'
                />
              </button>
              <a
                href='https://www.instagram.com/finverse_co?igsh=bW1kZDAxdmExc2Rn&utm_source=qr'
                target='_blank'
                rel='noopener noreferrer'
                className='cursor-pointer'>
                <Image
                  src='/images/svg/InstagramLogo.svg'
                  alt='Logo'
                  width={160}
                  height={100}
                  className='w-[25px] h-[25px]'
                />
              </a>
              <a
                href='https://www.linkedin.com/company/finverse-spend-smarter-live-freer/'
                target='_blank'
                rel='noopener noreferrer'
                className='cursor-pointer'>
                <Image
                  src='/images/svg/LinkedinLogo.svg'
                  alt='LinkedIn'
                  width={160}
                  height={100}
                  className='w-[25px] h-[25px]'
                />
              </a>
            </div>
          </div>
          <div className='w-1/3 sm:mx-auto  sm:w-fit'>
            <ul className=' text-sm flex flex-col gap-12 items-center justify-center'>
              <Link href={"/#about"}> About Us </Link>
              <Link href={"/#feature"}> Features </Link>
              <Link
                href='mailto:moneychatwithhafsat@gmail.com'
                className='contact-button'
                aria-label='Contact via email'
                target='_blank'
                rel='noopener noreferrer'>
                Contact Us
              </Link>
            </ul>
          </div>
          <div className='w-1/3 sm:text-center sm:mx-auto sm:w-fit'>
            <div className='text-white w-full text-left leading-[40px]'>
              <h1 className='text-[32px] sm:text-2xl sm:w-fit sm:mx-auto sm:text-center'>Ready to take control?</h1>
              <p className='text-white w-[80%] sm:w-fit sm:mx-auto sm:text-center  mb-4'>
                Manage your finances the healthy way
              </p>
              <div className='sm:w-fit sm:mx-auto'>
                <CustomButton
                  bgColor={colors.textYellow}
                  color={colors.textDark}
                  onClick={() => {}}
                  padding='10px 1.5rem'
                  borderRadius='40px'
                  className='hidden md:block font-semibold text-sm'>
                  Join the waitlist <GoArrowUpRight size={20} className='font-light' />
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
        <hr className='text-natural200' />
        <div className='flex justify-between items-center pt-4 px-14 xs:px-6 text-white max-w-[1200px] mx-auto pb-6'>
          <p className='text-sm sm:text-xs'>© 2025 Finverse. All rights reserved.</p>
          <div className='flex gap-2 items-center'>
            <p className='sm:text-xs whitespace-nowrap'>Brought to you by: </p>
            <Image
              src='/images/svg/MCWH.svg'
              alt='Logo'
              width={100}
              height={100}
              className='w-[65px] sm:w-[40px] h-[50px] sm:h-auto'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
