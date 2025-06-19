import React, { useEffect, useState } from "react";
import Image from "next/image";

const steps = [
  {
    number: 1,
    title: "Request Your Errand",
    description: "At Spikk, explore vendors or create custom shopping lists for purchase, pickup, and delivery.",
  },
  {
    number: 2,
    title: "Confirm & Pay Securely",
    description: "At Spikk, review your order details and complete your payment for a worry-free experience.",
  },
  {
    number: 3,
    title: "Track Your Delivery",
    description: "Watch your errand unfold with real-time updates on the status of your delivery.",
  },
  {
    number: 4,
    title: "Relax and Enjoy",
    description: "Sit back as your Pikker ensures your errands are handled professionally and on time.",
  },
];

const HowItWorksSection = () => {
  const [activeStepCount, setActiveStepCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStepCount((prev) => (prev < steps.length ? prev + 1 : 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id='how-it-works' className='w-full bg-[#f3f7f9] py-20 flex flex-col items-center px-4'>
      {/* Pill */}
      <div className='mb-6'>
        <div className='w-full text-gray300 text-center text-[50px] -mb-4'>...</div>
        <span className='inline-block bg-white border border-gray300 rounded-3xl px-6 py-2 font-bold mb-8 text-2xl xs:text-xl text-black'>
          HOW IT WORKS
        </span>
      </div>
      {/* Headline */}
      <h2 className='text-center text-black text-3xl md:text-5xl xs:text-xl font-bold max-w-[900px] mb-10 leading-tight'>
        Seamless shopping, pickup and delivery
        <br className='hidden md:block' /> all in 4 simple steps
      </h2>
      {/* Steps and Phones */}
      <div className='flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-10 md:gap-0 mb-12'>
        {/* Left Steps */}
        <div className='flex flex-col gap-10 flex-1 max-w-xs md:items-end w-full'>
          {steps.slice(0, 2).map((step, index) => {
            const isActive = index < activeStepCount;
            return (
              <div key={step.number} className='flex flex-col items-end text-right'>
                <div className='flex flex-col items-end mb-2'>
                  <span
                    className={` ${
                      isActive ? "text-yellow700 bg-black" : "text-black bg-white border border-gray300"
                    } rounded-lg w-8 h-8 flex items-center justify-center font-bold text-lg transition-all duration-500 ease-in-out transform ${
                      isActive ? "scale-110 shadow-lg" : ""
                    }`}>
                    {step.number}
                  </span>
                  <span
                    className={`${
                      isActive ? "font-black text-black" : "font-medium text-black600"
                    } text-lg transition-all duration-500 ease-in-out`}>
                    {step.title}
                  </span>
                </div>
                <p
                  className={`${
                    isActive ? "text-black font-medium" : "text-gray400"
                  } text-base max-w-[260px] transition-all duration-500 ease-in-out`}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
        {/* Phones */}
        <div className='flex flex-row items-center justify-center gap-[-40px] relative z-10 md:mx-10'>
          <Image
            src='/images/svg/iPhone2.svg'
            alt='Shop Anything'
            width={180}
            height={360}
            className='w-[160px] md:w-[180px] h-auto rounded-2xl shadow-lg z-0 -mr-[100px]'
          />
          <Image
            src='/images/svg/iPhone1.svg'
            alt='Main Dashboard'
            width={220}
            height={440}
            className='w-[180px] md:w-[220px] h-auto rounded-2xl shadow-lg z-10'
          />
          <Image
            src='/images/png/iPhone3.png'
            alt='Order Summary'
            width={180}
            height={360}
            className='w-[160px] md:w-[180px] h-auto rounded-2xl shadow-lg z-0 -ml-[100px]'
          />
        </div>
        {/* Right Steps */}
        <div className='flex flex-col gap-10 flex-1 max-w-xs md:items-start w-full'>
          {steps.slice(2).map((step, idx) => {
            const index = idx + 2;
            const isActive = index < activeStepCount;
            return (
              <div key={step.number} className='flex flex-col items-start text-left'>
                <div className='flex flex-col items-start mb-2'>
                  <span
                    className={` ${
                      isActive ? "bg-black text-yellow700 border-none" : "text-black bg-white border border-gray300 "
                    } rounded-lg w-8 h-8 flex items-center justify-center font-bold text-lg transition-all duration-500 ease-in-out transform ${
                      isActive ? "scale-110 shadow-lg" : ""
                    }`}>
                    {step.number}
                  </span>
                  <span
                    className={`${
                      isActive ? "font-black text-black" : "font-medium text-black600"
                    } text-lg transition-all duration-500 ease-in-out`}>
                    {step.title}
                  </span>
                </div>
                <p
                  className={`${
                    isActive ? "text-black font-medium" : "text-gray400"
                  } text-base max-w-[260px] transition-all duration-500 ease-in-out`}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* App Store Badges */}
      <div className='flex flex-row gap-4 mb-12'>
        <a
          className='hover:opacity-80 transition-all duration-200 ease-in-out'
          href='https://apps.apple.com/ng/app/spikk/id1619072479'
          target='_blank'
          rel='noopener noreferrer'>
          <Image src='/images/svg/Appstore.svg' alt='Download on the App Store' width={160} height={50} />
        </a>
        <a
          className='hover:opacity-80 transition-all duration-200 ease-in-out'
          href='https://play.google.com/store/apps/details?id=com.spikk'
          target='_blank'
          rel='noopener noreferrer'>
          <Image src='/images/svg/Playstore.svg' alt='Get it on Google Play' width={180} height={50} />
        </a>
      </div>
      {/* Bottom Description */}
      <p className='text-center text-black600 text-lg xs:text-base max-w-[1200px] mx-auto'>
        From the comfort of your home/offices, Spikk connects you to dedicated shoppers that run errands and deliver top
        notch services.
        <br className='hidden md:block' />
        Spikk is dedicated to empowering people, communities and making life a lot easier.
      </p>
    </section>
  );
};

export default HowItWorksSection;
