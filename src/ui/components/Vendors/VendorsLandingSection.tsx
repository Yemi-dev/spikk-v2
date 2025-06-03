import React from "react";
import Image from "next/image";
import CustomButton from "@/ui/atoms/CustomButton";
import { colors } from "@/constants/colors";
import ContactForm from "./ContactForm";

const features = [
  {
    icon: "/images/svg/vendor1.svg",
    title: "Reach More Customers",
    desc: "Get discovered by a broader audience actively searching for products like yours.",
  },
  {
    icon: "/images/svg/vendor2.svg",
    title: "Secure & Fast Payments",
    desc: "Enjoy timely payouts and transparent transaction tracking, no more chasing payments.",
  },
  {
    icon: "/images/svg/vendor3.svg",
    title: "Easy-to-Use Dashboard",
    desc: "Manage orders, update inventory, and track performance all in one place.",
  },
  {
    icon: "/images/svg/vendor4.svg",
    title: "Full Vendor Support",
    desc: "From onboarding to scaling, our team is always ready to help you succeed.",
  },
  {
    icon: "/images/svg/vendor5.svg",
    title: "No Hidden Charges",
    desc: "Transparent pricing with no surprises so you can focus on growing your business.",
  },
];

const VendorsLandingSection = () => {
  return (
    <section className='w-full flex flex-col items-center gap-20 px-4 sm:px-6 md:px-10 py-10 my-[100px]'>
      {/* Hero Section */}
      <div className='w-full max-w-6xl flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-md'>
        {/* Image */}
        <div className='relative w-full md:w-1/2 h-[260px] md:h-auto'>
          <Image
            src='/images/png/VendorsLeft.png'
            alt='Supermarket aisle with cart'
            fill
            className='object-cover object-center'
            priority
          />
        </div>
        {/* Text Content */}
        <div className='flex flex-col justify-center gap-6 p-8 md:w-1/2 bg-gradient-to-r from-textGray to-black text-white'>
          <h1 className='text-3xl md:text-4xl font-extrabold leading-tight mb-2'>
            Partner With Us &<br />
            Grow Your Business
          </h1>
          <p className='text-base md:text-lg font-normal leading-relaxed max-w-xl'>
            Join our trusted network of vendors and reach more customers with ease. By selling your products or offering
            your services on Spikk, you tap into a growing community that values speed, convenience, and quality.
            We&apos;ll help you manage orders effortlessly, get paid securely, and grow your business faster.
          </p>
          <div>
            <CustomButton
              bgColor={colors.textYellow}
              color={colors.textDark}
              className='font-semibold text-base px-6 py-3 mt-2 hover:opacity-90 transition-all shadow rounded-lg'
              borderRadius='8px'>
              REGISTER NOW
            </CustomButton>
          </div>
        </div>
      </div>

      {/* Why Partner Section */}
      <div className='w-full flex flex-col items-center gap-10 mt-[100px]'>
        <h2 className='text-2xl md:text-3xl font-bold text-textDark text-center'>WHY PARTNER WITH SPIKK?</h2>
        <p className='text-base md:text-lg text-textGray text-center max-w-2xl mb-4'>
          By partnering with us, you gain access to a wider market, simplified order management, and a trusted system
          that puts your business first.
        </p>
        <div className='w-full max-w-6xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-4'>
          {features.map((feature) => (
            <div
              key={feature.title}
              className='flex flex-col items-center text-center bg-white rounded-xl shadow-sm p-6 gap-4 h-full'>
              <div className='w-full h-full flex items-center justify-center mx-auto mb-2'>
                <Image src={feature.icon} alt={feature.title} width={80} height={80} className='w-[80px] h-[80px]' />
              </div>
              <h3 className='text-lg font-semibold text-textDark mb-1'>{feature.title}</h3>
              <p className='text-sm text-textGray leading-relaxed'>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/*Contact Us Section*/}
      <ContactForm />
    </section>
  );
};

export default VendorsLandingSection;
