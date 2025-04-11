import Image from "next/image";
import React from "react";

const Breakdown = () => {
  return (
    <div className='w-full max-w-[1200px] mx-auto my-10 px-6'>
      <h2 className='text-[40px] sm:text-[32px] sm:leading-10 font-medium leading-[60px]'>With Finverse, you can:</h2>
      <div className='border border-purpleStroke sm:w-fit sm:mx-auto rounded-2xl px-5 py-4 my-6 flex gap-4 sm:gap-10 sm:flex-col'>
        <div className='bg-bgPurpleLight  sm:max-w-[320px] sm:w-fit shadow-2xl border border-purpleStroke rounded-2xl px-5 py-4 flex flex-col gap-4'>
          <div className='mt-4'>
            <h3 className='text-[32px] font-medium leading-[40px] sm:text-[28px] sm:leading-8'>Create a</h3>
            <h3 className='text-[32px] font-medium leading-[40px] sm:text-[28px] sm:leading-8'>budget easily</h3>
            <p className='mt-4 sm:text-sm'>Build a budget in 10 minutes that fits your income and goals.</p>
          </div>
          <Image
            src='/images/svg/income.svg'
            alt='Hero Image'
            width={100}
            height={100}
            className=' w-[332px] h-[311px]'
          />
        </div>
        <div className='bg-bgPurpleLight sm:max-w-[320px] sm:w-fit shadow-2xl border border-purpleStroke rounded-2xl px-5 py-4 flex flex-col gap-4'>
          <Image
            src='/images/svg/expenses2.svg'
            alt='Hero Image'
            width={100}
            height={100}
            className=' w-[332px] h-[311px]'
          />
          <div>
            <h3 className='text-[32px] font-medium leading-[40px] sm:text-[28px] sm:leading-8'>Track your expenses </h3>
            <p className='mt-4 sm:text-sm'>Build a budget in 10 minutes that fits your income and goals.</p>
          </div>
        </div>
        <div className='bg-bgPurpleLight  sm:max-w-[320px] sm:w-fit shadow-2xl border border-purpleStroke rounded-2xl px-5 py-4 flex flex-col gap-4'>
          <div className='mt-4'>
            <h3 className='text-[32px] font-medium leading-[40px] sm:text-[28px] sm:leading-8'>Set financial</h3>
            <h3 className='text-[32px] font-medium leading-[40px] sm:text-[28px] sm:leading-8'>goals</h3>
            <p className='mt-4 text-sm'>Build a budget in 10 minutes that fits your income and goals.</p>
          </div>
          <Image
            src='/images/svg/goals2.svg'
            alt='Hero Image'
            width={100}
            height={100}
            className=' w-[332px] h-[311px]'
          />
        </div>
      </div>
    </div>
  );
};

export default Breakdown;
