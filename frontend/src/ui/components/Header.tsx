import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import routes from "@/constants/routes";
import CustomButton from "../atoms/CustomButton";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Header: React.FC<{ setOpenWaitlist: (value: boolean) => void }> = ({ setOpenWaitlist }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-white'>
      <div className='w-full flex justify-between items-center py-10 px-12 xs:px-6 text-white max-w-[1200px] mx-auto '>
        <button onClick={() => router.push("/")} className={"cursor-pointer"}>
          <Image src='/images/svg/logo.svg' alt='Logo' width={160} height={100} />
        </button>

        <ul className='hidden md:flex justify-center items-center gap-8'>
          {routes.map((route) => {
            const isActive = router.pathname === route.route;

            return (
              <Link
                href={route.route}
                key={route.route}
                className={`cursor-pointer relative text-textDark ${isActive ? "font-bold" : ""}`}>
                {route.name}
                {isActive && <div className='absolute bottom-[-10px] left-0 w-7 h-1 bg-green'></div>}
              </Link>
            );
          })}
          <CustomButton
            onClick={() => setOpenWaitlist(true)}
            padding='10px 1.5rem'
            className='hidden md:block font-semibold'>
            Join the waitlist <GoArrowUpRight size={20} className='font-light' />
          </CustomButton>
        </ul>

        <div className='relative md:hidden'>
          <HiOutlineMenuAlt1 className='md:hidden cursor-pointer text-textDark' size={25} onClick={toggleMenu} />

          {isMenuOpen && (
            <div className='md:hidden absolute right-0  z-20 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-md'>
              <ul className='flex flex-col py-2 px-2'>
                {routes.map((route) => {
                  const isActive = router.pathname === route.route;
                  return (
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      key={route.route}
                      href={route.route}
                      className={`p-2 cursor-pointer text-textDarker text-sm mx-auto ${isActive ? "font-bold" : ""}`}>
                      {route.name}
                      {isActive && <div className='absolute bottom-[-10px] left-0 w-7 h-1 bg-green'></div>}
                    </Link>
                  );
                })}
                <CustomButton
                  margin='10px 0'
                  onClick={() => {
                    setOpenWaitlist(true);
                    setIsMenuOpen(false);
                  }}
                  className={`p-2 cursor-pointer text-textDarker text-sm text-center w-full`}>
                  Join the waitlist <GoArrowUpRight size={20} className='font-light' />
                </CustomButton>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
