import React from "react";
import CustomButton from "@/ui/atoms/CustomButton";
import { colors } from "@/constants/colors";
import { useRouter } from "next/router";

const GetStartedSection = () => {
  const router = useRouter();
  return (
    <section className='w-full flex flex-col items-center py-12 px-2 sm:px-0 bg-white'>
      <div className='w-full max-w-6xl flex flex-col items-center gap-10 bg-[#F7F7F7] px-8 py-6'>
        <h2 className='sm:text-[28px] md:text-[30px] font-bold text-black text-center mb-2'>GET STARTED</h2>
        <div className='w-full flex flex-col md:flex-row gap-8 justify-center items-stretch'>
          {/* Submit Your Errand Request Card */}
          <div className='flex-1 bg-yellow100 rounded-xl p-8 flex flex-col justify-between shadow-sm min-w-[280px] max-w-full'>
            <div>
              <h3 className='text-[24px] sm:text-[26px] font-bold text-black mb-4'>Submit Your Errand Request</h3>
              <p className='text-[17px] text-[#222] font-normal mb-8 leading-relaxed'>
                Looking for a flexible way to earn and make an impact? Become one of our everyday heroes helping people
                get things done. As part of our network, you&apos;ll enjoy flexible hours, consistent opportunities, and
                the satisfaction of being someone&apos;s problem solver.
              </p>
            </div>
            <CustomButton
              bgColor={"transparent"}
              color={colors.blue100}
              onClick={() => router.push("/vendors#register")}
              className='font-bold border border-blue100 text-blue100 px-6 py-3 text-base hover:bg-blue100 hover:text-white transition-all w-fit'>
              Submit Request
            </CustomButton>
          </div>
          {/* Join Our Team of Heroes Card */}
          <div className='flex-1 bg-pink100 rounded-xl p-8 flex flex-col justify-between shadow-sm min-w-[280px] max-w-full'>
            <div>
              <h3 className='text-[24px] sm:text-[26px] font-bold text-black mb-4'>Join Our Team of Heroes</h3>
              <p className='text-[17px] text-[#222] font-normal mb-8 leading-relaxed'>
                Need to purchase something or send an item across town? We&apos;ve got you covered. Whether it&apos;s
                groceries, documents, or special deliveries, simply tell us what you need, and our trusted team will get
                it done fast, safe, and stress-free.
              </p>
            </div>
            <CustomButton
              bgColor={"transparent"}
              color={colors.blue100}
              onClick={() => router.push("/vendors#register")}
              className='font-bold border border-blue100 text-blue100 px-6 py-3 text-base hover:bg-blue100 hover:text-white transition-all w-fit'>
              Join Now
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
