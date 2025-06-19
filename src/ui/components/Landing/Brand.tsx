import React from "react";
import Image from "next/image";

const Brand = () => {
  const brands = [
    { name: "/images/svg/jumia.svg", size: 70 },
    { name: "/images/svg/konga.svg", size: 65 },
    { name: "/images/svg/nestle.svg", size: 60 },
    { name: "/images/svg/netflix.svg", size: 70 },
    { name: "/images/svg/nestle.svg", size: 60 },
    { name: "/images/svg/konga.svg", size: 65 },
    { name: "/images/svg/jumia.svg", size: 70 },
  ];

  return (
    <div className='bg-white px-4 py-2 w-full'>
      <div className='w-full max-w-[1300px] mx-auto flex justify-between items-center gap-6 sm:flex-col sm:gap-4'>
        <div className='flex justify-between items-center flex-1 sm:w-full xs:flex-wrap gap-x-4 xs:justify-center'>
          {brands.map(({ name, size }, index) => (
            <Image
              key={index}
              src={name}
              alt='brand'
              width={size}
              height={20}
              quality={100}
              layout='fixed'
              unoptimized
              className={`${index > 3 && "sm:hidden"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
