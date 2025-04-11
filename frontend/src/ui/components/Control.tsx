import Image from "next/image";
import React from "react";

const Control = () => {
  const controlData = [
    {
      title1: "Daily",
      title2: "Tracking",
      content: "Manually log your spending for real control —perfect for cash users",
      image: "/images/svg/Notepad.svg",
    },
    {
      title1: "Tailored",
      title2: "to You",
      content: "Interactive tools tailored to your income and goals, not generic templates.",
      image: "/images/svg/CompassTool.svg",
    },
    {
      title1: "Real-Time",
      title2: "Insights",
      content: "See your financial progress update instantly as you track.",
      image: "/images/svg/Timer.svg",
    },
    {
      title1: "Goal-Focused",
      title2: "Design",
      content: "Quantify, visualize and achieve your dream with tools that keep you on track.",
      image: "/images/svg/Crosshair.svg",
    },
  ];

  return (
    <div className='w-full max-w-[1200px] mx-auto my-10 px-6'>
      <p className='text-lg text-textGray sm:text-sm'>Not just another finance app...</p>
      <h2 className='text-3xl md:text-[40px] sm:text-[28px] sm:leading-10  font-medium leading-tight md:leading-[60px]'>
        Your Money, Your Control
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8 sm:items-center sm:justify-center sm:mx-auto sm:w-fit'>
        {controlData.map(({ title1, title2, content, image }, index) => (
          <div
            key={index}
            className='bg-bgPurpleLight sm:max-w-[300px] sm:w-fit shadow-2xl border border-purpleStroke rounded-2xl p-6 flex flex-col h-full'>
            <div className='mb-4'>
              <Image src={image} alt={title1} width={54} height={54} className='w-[54px] h-[54px]' />
            </div>
            <h3 className='text-xl md:text-2xl font-medium leading-tight'>
              {title1} <br /> {title2}
            </h3>
            <p className='mt-4 text-base md:text-lg flex-grow'>{content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Control;
