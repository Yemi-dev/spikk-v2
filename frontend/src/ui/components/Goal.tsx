import React from "react";

const Goal = () => {
  return (
    <div id='about' className='bg-bgPurple w-full mt-[-2rem]'>
      <div className='max-w-[1250px] goal-bg mx-auto flex md:flex-row flex-col gap-16 md:items-start items-center justify-center py-20 px-4'>
        <div className='text-white text-5xl md:w-[45%] w-full sm:text-center leading-[60px] sm:text-[36px] sm:leading-10'>
          <h1>
            Gain <span className='text-textYellow'>Financial Clarity.</span>{" "}
          </h1>
          <h1>Spend with Purpose. </h1>
          <h1>Live Freer.</h1>
        </div>
        <p className='text-xl text-white md:w-[55%] w-full leading-[40px]  sm:text-center sm:text-lg '>
          Finverse is your financial bestie—designed for young individuals who want to manage their money confidently.
          Create budgets in minutes, track spending, and achieve financial goals with ease.
        </p>
      </div>
    </div>
  );
};

export default Goal;
