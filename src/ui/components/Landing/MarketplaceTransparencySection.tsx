import React from "react";
import Image from "next/image";
import CustomButton from "../../atoms/CustomButton";
import { useRouter } from "next/router";
import { FaAngleRight } from "react-icons/fa6";
import Divider from "@/ui/atoms/Divider";
import { colors } from "@/constants/colors";

const features = [
  {
    image: "/images/png/Marketplace.png",
    alt: "Marketplace Variety",
    title: "Marketplace Variety",
    description: "Access your favorite supermarkets and vendors like Bokku.com, known for low prices and quality items",
    bullets: ["Wide range of products from trusted vendors", "Benefit from competitive prices across board"],
    reverse: false,
  },
  {
    image: "/images/png/Transparency.png",
    alt: "Trusted Transparency",
    title: "Trusted Transparency",
    description:
      "We provide clear pricing with no hidden charges, ensuring complete honesty and fairness in every transaction",
    bullets: ["Simply put what you see is what you pay", "Get detailed breakdown before payment"],
    reverse: true,
  },
  {
    image: "/images/png/Marketplace.png",
    alt: "Marketplace Variety",
    title: "Marketplace Variety",
    description: "Access your favorite supermarkets and vendors like Bokku.com, known for low prices and quality items",
    bullets: ["Wide range of products from trusted vendors", "Benefit from competitive prices across board"],
    reverse: false,
  },
];

const MarketplaceTransparencySection = () => {
  const router = useRouter();
  return (
    <section className='w-full flex flex-col items-center justify-center gap-20'>
      {features.map((feature, idx) => (
        <div key={feature.title} className={`w-full ${idx === 1 ? "bg-white" : "bg-[#EEF2F7]"} py-20 px-4`}>
          <div
            className={`max-w-6xl mx-auto flex flex-col md:flex-row ${
              feature.reverse ? "md:flex-row-reverse" : ""
            } items-center justify-between gap-10 md:gap-20`}>
            {/* Image */}
            <div className='flex-1 flex items-center justify-center w-full max-w-md mb-8 md:mb-0'>
              <div className='relative w-full max-w-[400px]'>
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={400}
                  height={400}
                  className='rounded-2xl object-cover w-full h-auto shadow-2xl'
                />
              </div>
            </div>
            {/* Text Content */}
            <div
              className={`${
                idx === 1 && "ml-6 px-2"
              }  px-6 flex-1 flex flex-col items-start md:items-start w-full max-w-xl`}>
              <h2 className='text-black text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight'>{feature.title}</h2>
              <p className='text-textGray text-base md:text-lg mb-8 max-w-[550px] font-medium'>{feature.description}</p>
              <ul className='mb-8 space-y-4 w-full'>
                {feature.bullets.map((bullet, i) => (
                  <>
                    <Divider thick={1} margin={"10px 0 0 0"} color={colors.gray200} />
                    <li key={i} className='flex items-center gap-3 text-base md:text-lg font-medium'>
                      <Image src='/images/svg/Check.svg' alt='Check' width={22} height={22} className='min-w-[22px]' />
                      <span className='text-black'>{bullet}</span>
                    </li>
                  </>
                ))}
                <Divider thick={1} margin={"10px 0 0 0"} color={colors.gray200} />
              </ul>
              <CustomButton
                onClick={() => router.push("/home#how-it-works")}
                className='text-textGray bg-yellow700 hover:text-white rounded-xl font-bold px-6 py-3 text-base mt-2 hover:opacity-90 transition-all'>
                LEARN MORE
                <FaAngleRight className='mb-[2px]' />
              </CustomButton>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MarketplaceTransparencySection;
