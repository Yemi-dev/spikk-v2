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
      occupation: "Pikker",
      avi: "/images/png/HeroRight.png",
      text1: "Errands",
      text2: "Made",
      text3: "Effortless",
    },
    {
      stat: 190,
      name: "Abdul Yusuf",
      bgImage: "/images/png/HeroRight2.png",
      stars: 3.5,
      occupation: "Pikker",
      avi: "/images/png/HeroRight.png",
      text1: "Effortless",
      text2: "Runs",
      text3: "Anytime",
    },
    {
      stat: 230,
      name: "Shammah Yusuf",
      bgImage: "/images/png/HeroRight3.png",
      stars: 4.8,
      occupation: "Pikker",
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
              className={`w-full flex flex-col lg:flex-row items-center justify-center gap-8 transition-opacity duration-700 ease-in-out
                ${
                  activeSlide === index
                    ? "opacity-100 relative z-10 pointer-events-auto"
                    : "opacity-0 absolute top-0 left-0 w-full pointer-events-none z-0"
                }
              `}
              style={{ minHeight: 600 }}>
              <div className='w-full lg:w-1/2 text-center lg:text-left lg:pt-14 px-4 py-14'>
                <h1 className='hero-title text-4xl lg:text-5xl xl:text-[84px] font-bold leading-tight lg:leading-[1] max-w-[600px] text-black mx-auto lg:mx-0 transition-opacity duration-700 ease-in-out'>
                  {data.text1}
                </h1>
                <h1 className='hero-title text-4xl lg:text-5xl xl:text-[84px] font-bold leading-tight lg:leading-[1] flex items-center justify-center lg:justify-start gap-2 max-w-[600px] mx-auto lg:mx-0 transition-opacity text-black duration-700 ease-in-out'>
                  {data.text2}{" "}
                  <span className='hero-title-bold'>
                    <Image
                      src='/images/svg/hero4.svg'
                      alt='hero4'
                      width={136}
                      height={40}
                      className='w-[136px] h-[40px] xs:w-[100px] xs:h-[30px] transition-opacity duration-700 ease-in-out'
                    />
                  </span>{" "}
                </h1>
                <h1 className='hero-title text-black text-4xl lg:text-5xl xl:text-[84px] font-bold leading-tight lg:leading-[1] max-w-[600px] mx-auto lg:mx-0 transition-opacity duration-700 ease-in-out'>
                  {data.text3}
                </h1>
                <p className='mt-4 max-w-[600px] text-textGray font-medium text-[18px] mx-auto lg:mx-0 transition-opacity duration-700 ease-in-out'>
                  Spikk simplifies your life by handling shopping, pickups, and deliveries with unmatched precision and
                  care.
                </p>
                <div className='flex flex-col sm:flex-col-reverse lg:flex-row gap-4 items-center justify-center lg:justify-start mt-6 transition-opacity duration-700 ease-in-out'>
                  <CustomButton
                    onClick={() => handleNavigate(!isHome ? "/home" : "/marketplace")}
                    bgColor={colors.yellow700}
                    padding={isHome ? "10px 20px" : "10px 20px"}
                    className='font-semibold whitespace-nowrap text-black rounded-xl hover:text-white transition-all duration-200 ease-in-out'>
                    {isHome ? (
                      <>START YOUR ERRAND NOW</>
                    ) : (
                      <>
                        REQUEST ERRAND <FaAngleRight />
                      </>
                    )}
                  </CustomButton>
                  <CustomButton
                    onClick={() => handleNavigate("/vendors#register")}
                    bgColor={"transparent"}
                    color={colors.blue100}
                    padding={isHome ? "10px 20px" : "10px 20px"}
                    borderRadius={`rounded-[40px]`}
                    className='font-semibold whitespace-nowrap rounded-xl hover:border hover:border-blue100 transition-all duration-200 ease-in-out'>
                    {isHome ? (
                      <>JOIN AS A VENDOR/PARTNER</>
                    ) : (
                      <>
                        BECOME A VENDOR <FaAngleRight />
                      </>
                    )}
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
                    quality={100}
                    placeholder='blur'
                    blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
                    unoptimized
                    className='w-full h-auto aspect-square object-cover rounded-[40px] transition-opacity duration-700 ease-in-out'
                  />

                  {/* Top left stats card */}
                  <div className='absolute top-6 left-4 lg:left-[30px] bg-white px-4 py-2 rounded-lg shadow-md w-[150px] transition-opacity duration-700 ease-in-out'>
                    <div className='flex flex-col gap-2 text-sm'>
                      <div className='flex items-center gap-2'>
                        <span className='p-1 bg-black rounded-md text-white font-light'>{data.stat}</span>
                        <span className='text-textGray'>deliveries completed</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom card */}
                  <div className='absolute bottom-8 left-1/2 -translate-x-1/2 bg-white p-4 rounded-lg shadow-md w-[90%] max-w-[400px] transition-opacity duration-700 ease-in-out'>
                    <div className='flex items-center justify-between gap-4'>
                      <div className='flex items-center gap-4'>
                        <div className='flex flex-col items-center'>
                          <Image
                            src={data.avi}
                            alt='Rider Avatar'
                            width={50}
                            height={50}
                            className='rounded-full border border-gray200 transition-opacity duration-700 ease-in-out'
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
