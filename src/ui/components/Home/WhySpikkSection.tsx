import React from "react";
import Image from "next/image";

const features = [
  {
    title: "Seamless Experience",
    description: "From placing your request to final delivery, we make the process fast, smooth, and stress-free.",
    icon: "/images/svg/YellowCheck.svg",
  },
  {
    title: "Transparent Pricing",
    description: "No hidden-fees, just honest, upfront pricing you can trust.",
    icon: "/images/svg/YellowCheck.svg",
  },
  {
    title: "Swift Delivery",
    description: "We prioritize speed and reliability, ensuring your items get where they need to be, right on time.",
    icon: "/images/svg/YellowCheck.svg",
  },
  {
    title: "Responsive Support",
    description: "Need help? Our friendly support team is always ready to assist you every step of the way.",
    icon: "/images/svg/YellowCheck.svg",
  },
  {
    title: "Customer-centred service",
    description: "Your satisfaction drives everything we do. We listen, improve, and grow based on your feedback.",
    icon: "/images/svg/YellowCheck.svg",
  },
];

const testimonials = [
  {
    name: "AYOMIDE SAMUEL",
    text: "I've been using Spikk for a few months now, and I've been really impressed with the service. The app is easy to use, and the delivery is always on time. I highly recommend Spikk to anyone looking for a reliable delivery service.",
  },
  {
    name: "GLORIA NWACHUKWU",
    text: "Spikk has been a game-changer for me. I've been able to get all my groceries and other essentials delivered to my doorstep. The app is easy to use, and the delivery is always on time. ",
  },
  {
    name: "GIGI SUZANNE",
    text: "If you're looking for a reliable delivery service, Spikk is the way to go. You can even send items to your loved ones quickly and easily.",
  },
  {
    name: "CHRISTIAN EMMANUEL",
    text: "I totally recommend Spikk. It's a great way to get your items delivered to you quickly and easily.",
  },
  {
    name: "BASIT ABDULRAHMAN",
    text: "I've used Spikk app to shop and send items. It's like a one-stop shop for all your needs coupled with the best delivery service.",
  },
  {
    name: "CHISOM O.",
    text: "I don't even bother to shop in the market anymore. Spikk is the best way to get your items delivered to you quickly and easily.",
  },
];

const WhySpikkSection = () => {
  return (
    <section className='w-full flex flex-col items-center gap-16 py-12 px-2 sm:px-0 bg-white'>
      {/* WHY SPIKK */}
      <div className='w-full max-w-6xl flex flex-col items-center gap-2 xs:px-2'>
        <h2 className='text-[28px] sm:text-[32px] md:text-[36px] xs:text-xl font-bold text-black text-center'>WHY SPIKK</h2>
        <p className='text-[16px] sm:text-[16px] text-[#222] max-w-2xl mx-auto text-center font-normal mb-8'>
          We make buying and sending items simple, fast, and built around your convenience.
        </p>
        <div className='flex flex-col lg:flex-row gap-8 w-full items-center justify-center'>
          {/* Image */}
          <div className='flex-1 flex justify-center'>
            <div className='w-[370px] h-[320px] md:w-[610px] md:h-[520px] rounded-xl overflow-hidden shadow-lg'>
              <Image
                src='/images/png/whySpikk.png'
                alt='Why Spikk'
                width={610}
                height={520}
                className='object-cover w-full h-full'
              />
            </div>
          </div>
          {/* Features */}
          <div className='flex-1 flex flex-col gap-4 w-full max-w-xl rounded-lg p-6 bg-white shadow-sm'>
            {features?.map((feature) => (
              <div key={feature?.title} className='flex items-start gap-3 pb-4'>
                <div className='flex-shrink-0 mt-1 text-yellow700 w-[22px] h-[22px]'>
                  <Image src={feature?.icon} alt='icon' width={22} height={22} className='w-full h-full' />
                </div>
                <div>
                  <h3 className='font-bold text-[18px] text-black mb-1'>{feature?.title}</h3>
                  <p className='text-[15px] text-[#222] leading-snug'>{feature?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='w-full max-w-6xl flex flex-col items-center gap-8 mt-8'>
        <h3 className='text-[24px] sm:text-[28px] font-bold text-black text-center'>TESTIMONIALS</h3>
        <p className='text-[16px] sm:text-[16px] text-[#222] mx-auto text-center font-normal mb-4'>
          Don&apos;t just take our word for it, hear what our customers have to say about their experience with us.
        </p>
        <div className='w-full overflow-x-auto'>
          <div className='flex gap-6 pb-4 min-w-min'>
            {testimonials?.map((testimonial, idx) => (
              <div
                key={idx}
                className='bg-soft100 rounded-3xl border-[10px] border-soft200 shadow p-6 flex flex-col gap-4 min-w-[260px] w-[400px] xs:w-[300px]'>
                <span className='text-3xl text-blue-400 font-bold mb-2'>
                  <Image src='/images/svg/Approstrophe.svg' alt='Quote' width={24} height={24} />
                </span>
                <p className='text-[15px] text-[#222] leading-relaxed mb-2 italic'>{testimonial?.text}</p>
                <span className='font-bold text-black text-[14px] mt-auto text-center'>{testimonial?.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySpikkSection;
