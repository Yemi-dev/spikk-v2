import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { FiShoppingBag, FiUser, FiMenu, FiX } from "react-icons/fi";
import routes from "@/constants/routes";
import { useCart } from "@/hooks/cart.hook";

const HomeHeader = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm'>
      <div className='max-w-[1400px] mx-auto flex items-center justify-between px-8 sm:px-4 py-5'>
        {/* Logo */}
        <button onClick={() => router.push("/")} className='flex items-center cursor-pointer'>
          <Image src='/images/svg/Spikk-logo.svg' alt='Spikk Logo' width={65} height={25} priority />
        </button>

        {/* Desktop Nav */}
        <nav className='hidden md:flex flex-1 justify-center'>
          <ul className='flex gap-10 md:gap-6 items-center'>
            {routes.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => router.push(link.href)}
                  className={`uppercase tracking-wide text-[16px] md:text-[14px] px-2 py-1 transition-colors duration-150 ${
                    router.asPath === link.href ? "text-black font-bold" : "text-gray400 hover:text-black font-medium"
                  }`}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className='flex items-center gap-6 sm:gap-3'>
          {/* Icons */}
          <button
            onClick={() => router.push("/cart")}
            className='text-black hover:text-gray700 transition-colors relative'
            aria-label='Cart'>
            <FiShoppingBag size={22} />
            {cartItems.length > 0 && (
              <span className='absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                {cartItems.length}
              </span>
            )}
          </button>
          {/* <button className='text-black hover:text-gray700 transition-colors' aria-label='Account'>
            <FiUser size={22} />
          </button> */}

          {/* Mobile Menu Button */}
          <button
            className='md:hidden text-black hover:text-gray700 transition-colors'
            onClick={toggleMenu}
            aria-label='Menu'>
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav className='md:hidden bg-white border-t border-gray-100'>
          <ul className='flex flex-col items-end px-8 py-4'>
            {routes.map((link) => (
              <li key={link.label} className='w-full'>
                <button
                  onClick={() => {
                    router.push(link.href);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-right uppercase tracking-wide text-[14px] px-2 py-3 transition-colors duration-150 ${
                    router.asPath === link.href ? "text-black font-bold" : "text-gray400 hover:text-black font-medium"
                  }`}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default HomeHeader;
