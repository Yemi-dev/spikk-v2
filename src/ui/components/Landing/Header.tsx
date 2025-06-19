import React, { JSX } from "react";
import { useRouter } from "next/router";
import CustomButton from "../../atoms/CustomButton";
import { FaAngleRight } from "react-icons/fa6";
import { colors } from "@/constants/colors";
import SpikkLogo from "@/ui/atoms/SpikkLogo";

const Header = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className='bg-white shadow-lg fixed top-0 left-0 right-0 z-50'>
      <div className='w-full flex justify-between items-center py-4 px-12 xs:px-6 text-white max-w-[1300px] mx-auto '>
        <button onClick={() => router.push("/")} className='flex items-center cursor-pointer'>
          <SpikkLogo />
        </button>

        <ul className='flex justify-center items-center gap-8'>
          <CustomButton
            onClick={() => {
              router.push("/home");
            }}
            padding='10px 1.5rem'
            bgColor={colors.yellow700}
            className='block font-semibold bg-yellow700 text-black xs:text-xs'>
            REQUEST ERRAND <FaAngleRight />
          </CustomButton>
        </ul>

        {/* <div className='relative md:hidden'>
          <HiOutlineMenuAlt1 className='md:hidden cursor-pointer text-textDark' size={25} />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
