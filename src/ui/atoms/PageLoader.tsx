import React from "react";
import Image from "next/image";

interface PageLoaderProps {
  isLoading: boolean;
  message?: string;
}

const PageLoader: React.FC<PageLoaderProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className='fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center gap-4'>
        {/* Spikk Loading Icon */}
        <div className='relative w-20 h-20 sm:w-16 sm:h-16'>
          <Image
            src='/spikkPageLoadingIcon.gif'
            alt='Spikk Loading'
            fill
            sizes='(max-width: 640px) 64px, 80px'
            className='object-contain'
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
