import React from "react";
import Image from "next/image";
import CustomButton from "@/ui/atoms/CustomButton";
import { colors } from "@/constants/colors";
import { useRouter } from "next/router";

const steps = [
  {
    number: "01.",
    icon: "/images/svg/RequestCart.svg",
    title: "Make a Request",
    description: "Tell us what you need, just list the item(s) you want to buy or send.",
    image: "/images/svg/Request.svg", // Placeholder for Shop Anything screen
    bg: "bg-[#F7F7F7]",
  },
  {
    number: "02.",
    icon: "/images/svg/ConfirmIcon.svg",
    title: "Confirm & Pay",
    description: "Review your order details and complete your payment securely.",
    image: "/images/svg/Confirm.svg", // Placeholder for Wallet screen
    bg: "bg-[#FFE7C2]",
  },
  {
    number: "03.",
    icon: "/images/svg/Scooter.svg",
    title: "Fast Delivery",
    description: "We'll process your order right away and deliver it promptly.",
    image: "/images/png/HeroRight.png", // Placeholder for Wallet screen
    bg: "bg-[#FFE8EA]",
  },
  {
    number: "04.",
    icon: "/images/svg/BigStar.svg",
    title: "Share Your Feedback",
    description: "Your experience matters! Let us know how we did so we can serve you even better next time.",
    image: "/images/svg/star-rating.svg", // Placeholder for Wallet screen
    bg: "bg-[#E5F6FF]",
  },
  // Add more steps as needed
];

const HowItWorksSection = () => {
  const router = useRouter();
  return (
    <section id='how-it-works' className='w-full flex flex-col gap-8 items-center my-8 px-2 sm:px-0'>
      <div className='text-center mb-2sm: px-4'>
        <h2 className='text-[28px] sm:text-[32px] md:text-[36px] font-bold text-black mb-2'>HOW IT WORKS</h2>
        <p className='text-[18px] sm:text-[16px] text-[#222] mx-auto font-normal'>
          From the comfort of your home/office, Spikk connects you to dedicated shoppers that run errands and deliver
          top notch services.
          <br />
          Spikk is dedicated to empowering people, communities and making life a lot easier.
        </p>
      </div>
      <div className='flex flex-col gap-[80px] w-full max-w-6xl'>
        {steps.map((step, idx) => (
          <div
            key={step.number}
            className={`w-full ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
            } flex flex-col h-[400px] sm:h-[500px] overflow-y-hidden items-start justify-between rounded-2xl ${
              step.bg
            } pt-8 px-4 md:px-12 gap-6`}>
            {/* Left: Text */}
            <div className='flex-1 flex flex-col items-start md:items-start gap-2 md:gap-4'>
              <div className='flex items-center gap-2 mb-2'>
                <span className='text-[40px] font-extrabold text-black leading-none'>{step.number}</span>
              </div>
              <div className='flex items-start gap-2 mb-2'>
                <Image
                  src={step.icon}
                  alt='icon'
                  width={40}
                  height={32}
                  quality={100}
                  priority
                  placeholder='blur'
                  blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
                  unoptimized
                  className='inline-block'
                />
                <div>
                  <h3 className='text-[32px] sm:text-[24px] font-semibold text-black'>{step.title}</h3>
                  <p className='text-[18px] sm:text-[16px] text-black font-normal max-w-md'>{step.description}</p>
                </div>
              </div>
            </div>
            {/* Right: Image */}
            <div className='flex-1 flex justify-center md:justify-center w-full'>
              <div className='w-[393px] h-[430px]'>
                <Image
                  src={step.image}
                  alt={step.title}
                  width={393}
                  height={430}
                  className='rounded-xl shadow-lg w-[393px] h-[430px] object-cover sm:w-[300px] sm:h-[300px] mx-auto'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='my-10'>
        <CustomButton
          bgColor={colors.yellow700}
          onClick={() => router.push("/vendors#register")}
          padding='12px 0'
          className='font-bold w-[300px] text-[20px]'>
          LET&apos;S GET STARTED
        </CustomButton>
      </div>
    </section>
  );
};

export default HowItWorksSection;
