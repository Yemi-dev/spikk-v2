"use client";
import React, { useState, useEffect } from "react";
import CustomButton from "../../atoms/CustomButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { colors } from "@/constants/colors";
import { FaAngleRight } from "react-icons/fa6";

const Hero = ({ isHome }: { isHome?: boolean }) => {
  const templateData = [
    {
      stat: 549,
      name: "Lawal Yusuf",
      bgImage: "/images/png/HeroRight.png",
      stars: 4.2,
      occupation: "Picker",
      avi: "/images/png/HeroRight.png",
      text1: "Errands",
      text2: "Made",
      text3: "Effortless",
    },
    {
      stat: 190,
      name: "Abdul Yusuf",
      bgImage: "/images/png/Transparency.png",
      stars: 3.5,
      occupation: "Picker",
      avi: "/images/png/HeroRight.png",
      text1: "Effortless",
      text2: "Runs",
      text3: "Anytime",
    },
    {
      stat: 230,
      name: "Shammah Yusuf",
      bgImage: "/images/png/Marketplace.png",
      stars: 4.8,
      occupation: "Picker",
      avi: "/images/png/HeroRight.png",
      text1: "Simplify",
      text2: "Your",
      text3: "Errands",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % templateData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [templateData.length]);

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };

  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <div className='hero w-full'>
      <div className='w-full max-w-[1300px] mx-auto px-4 py-14 sm:py-6 mt-10'>
        <div className='flex items-center justify-center sm:flex-col gap-4 relative min-h-[600px]'>
          {templateData.map((data, index) => (
            <div
              key={index}
              className={`w-full flex flex-col lg:flex-row items-center justify-center gap-8 transition-opacity duration-500 ${
                activeSlide === index ? "opacity-100" : "opacity-0 hidden"
              }`}>
              <div className='w-full lg:w-1/2 text-center lg:text-left lg:pt-14 px-4 py-14'>
                <h1 className='hero-title text-4xl lg:text-5xl xl:text-[84px] font-semibold leading-tight lg:leading-[1.2] max-w-[600px] mx-auto lg:mx-0'>
                  {data.text1}
                </h1>
                <h1 className='hero-title text-4xl lg:text-5xl xl:text-[84px] font-semibold leading-tight lg:leading-[1.2] flex items-center justify-center lg:justify-start gap-2 max-w-[600px] mx-auto lg:mx-0'>
                  {data.text2}{" "}
                  <span className='hero-title-bold'>
                    <Image
                      src='/images/svg/hero4.svg'
                      alt='hero4'
                      width={136}
                      height={40}
                      className='w-[136px] h-[40px] xs:w-[100px] xs:h-[30px]'
                    />
                  </span>{" "}
                </h1>
                <h1 className='hero-title text-4xl lg:text-5xl xl:text-[84px] font-semibold leading-tight lg:leading-[1.2] max-w-[600px] mx-auto lg:mx-0'>
                  {data.text3}
                </h1>
                <p className='mt-4 max-w-[600px] mx-auto lg:mx-0'>
                  Spikk simplifies your life by handling shopping, pickups, and deliveries with unmatched precision and
                  care.
                </p>
                <div className='flex flex-col sm:flex-col-reverse lg:flex-row gap-4 items-center justify-center lg:justify-start mt-6'>
                  <CustomButton
                    onClick={() => handleNavigate(!isHome ? "/home" : "/vendors#register")}
                    bgColor={colors.yellow700}
                    className='w-[300px] font-semibold whitespace-nowrap'>
                    {isHome ? "START YOUR ERRAND NOW" : "REQUEST ERRAND"} <FaAngleRight />
                  </CustomButton>
                  <CustomButton
                    onClick={() => handleNavigate("/vendors#register")}
                    bgColor={"transparent"}
                    color={colors.blue100}
                    borderRadius={`rounded-[40px]`}
                    className='w-[300px] font-semibold whitespace-nowrap'>
                    {isHome ? "JOIN AS A VENDOR/PARTNER" : "BECOME A VENDOR"} <FaAngleRight />
                  </CustomButton>
                </div>
              </div>

              <div className='w-full lg:w-1/2 relative px-4'>
                <div className='relative w-full max-w-[500px] mx-auto'>
                  <Image
                    src={data.bgImage}
                    alt='HeroBackground'
                    width={500}
                    height={500}
                    className='w-full h-auto aspect-square object-cover rounded-[40px]'
                  />

                  {/* Top left stats card */}
                  <div className='absolute top-6 left-4 lg:left-[30px] bg-white px-4 py-2 rounded-lg shadow-md w-[150px]'>
                    <div className='flex flex-col gap-2 text-sm'>
                      <div className='flex items-center gap-2'>
                        <span className='p-1 bg-black rounded-md text-white font-light'>{data.stat}</span>
                        <span className='text-textGray'>deliveries completed</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom card */}
                  <div className='absolute bottom-8 left-1/2 -translate-x-1/2 bg-white p-4 rounded-lg shadow-md w-[90%] max-w-[400px]'>
                    <div className='flex items-center justify-between gap-4'>
                      <div className='flex items-center gap-4'>
                        <div className='flex flex-col items-center'>
                          <Image
                            src={data.avi}
                            alt='Rider Avatar'
                            width={50}
                            height={50}
                            className='rounded-full border border-gray200'
                          />
                          <div className='flex gap-1 border border-gray200 rounded-full py-[2px] px-3 mt-[-4px] bg-white text-[10px]'>
                            <p>{data.stars}</p>
                            <span className='text-black'>★</span>
                          </div>
                        </div>
                        <div>
                          <p className='font-semibold'>{data.name}</p>
                          <p className='text-sm text-textGray'>{data.occupation}</p>
                        </div>
                      </div>
                      <div>
                        <Image src='/images/svg/rider.svg' alt='arrow-right' width={30} height={30} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='w-fit mx-auto mt-14 flex gap-2'>
          {templateData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`text-[18px] text-sm font-medium ${activeSlide === index ? "text-black" : "text-gray300"}`}>
              {index === 0 ? "— 01 — " : index === 1 ? "02 — " : "03 — "}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
