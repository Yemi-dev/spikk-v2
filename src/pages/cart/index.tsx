import React from "react";
import HomeFooter from "@/ui/components/Home/HomeFooter";
import HomeHeader from "@/ui/components/Home/HomeHeader";
import CartInfo from "@/ui/components/Cart/CartInfo";

const Cart = () => {
  return (
    <div className='bg-white font-gilroy min-h-screen relative'>
      <HomeHeader />
      <main className='flex flex-col gap-8 w-full max-w-[1300px] mx-auto pt-32 pb-16 px-4'>
        {/* Cart Items */}
        <CartInfo />
      </main>
      <HomeFooter />
    </div>
  );
};

export default Cart;
