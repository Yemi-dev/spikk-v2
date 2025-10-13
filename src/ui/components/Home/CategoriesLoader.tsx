import React from "react";

const CategoriesSkeleton = ({ count = 6 }: { count?: number }) => {
  return (
    <div className='flex flex-wrap justify-center gap-4 w-full'>
      {[...Array(count)].map((_, index) => (
        <div
          key={index}
          className='flex flex-wrap items-center justify-center bg-white border border-soft200 rounded-xl p-5 w-[165px] xs:w-[140px] h-[240px] shadow-sm'>
          <div className='w-[90px] h-[120px] mb-5 bg-soft200 animate-pulse rounded-lg' />
          <div className='w-24 h-6 bg-soft200 animate-pulse rounded' />
        </div>
      ))}
    </div>
  );
};

export default CategoriesSkeleton;
