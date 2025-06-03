import React, { useState } from "react";

const videos = [
  {
    src: "https://www.youtube.com/embed/bf2tFixliMA?si=f6ynEg4bFjnq2Fy0",
    poster: "/images/png/demo-poster.png",
  },
  {
    src: "https://www.youtube.com/embed/mtPqxJBMXCQ?si=9EAaClDjs8Fqk2I7",
    poster: "/images/png/HeroRight.png",
  },
  {
    src: "https://www.youtube.com/embed/bf2tFixliMA?si=f6ynEg4bFjnq2Fy0",
    poster: "/images/png/Marketplace.png",
  },
];

const ProductDemoSection = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const total = videos.length;

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + total) % total);
      setIsTransitioning(false);
    }, 600);
  };
  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % total);
      setIsTransitioning(false);
    }, 600);
  };

  return (
    <section className='w-full bg-black py-20 flex flex-col items-center xlg:px-10 px-4'>
      {/* Demo Button */}
      <button className='mb-8 px-8 py-3 rounded-full bg-gray800 text-white font-bold text-2xl shadow-md hover:bg-gray300 transition'>
        WATCH PRODUCT DEMO
      </button>
      {/* Headline */}
      <h2 className='text-white text-center text-3xl md:text-5xl font-bold max-w-[1000px] mb-10 leading-tight'>
        Discover how Spikk transforms everyday errands into a seamless experience
      </h2>
      {/* Video Carousel */}
      <div className='relative flex items-center justify-center w-full max-w-2xl min-h-[340px]'>
        {/* Left Arrow */}
        <button
          className='absolute xlg:-left-7 left-[-150px] top-1/2 -translate-y-1/2 bg-gray400 bg-opacity-40 hover:bg-opacity-70 text-white rounded-full w-7 h-7 flex items-center justify-center z-10'
          onClick={handlePrev}
          aria-label='Previous video'>
          <svg width='18' height='18' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
            <path d='M15 19l-7-7 7-7' />
          </svg>
        </button>
        {/* Stacked Videos */}
        <div
          className='relative w-full h-full flex items-center justify-center overflow-visible'
          style={{ minHeight: 320 }}>
          {videos.map((video, idx) => {
            // Calculate stacking order
            const offset = (idx - current + total) % total;
            // Only render top 3 for performance
            if (offset > 2) return null;
            // Animation classes
            let className = "absolute left-0 right-0 mx-auto transition-all duration-600 ease-in-out";
            if (offset === 0) {
              className += ` z-30 ${isTransitioning ? "animate-slide-up" : ""}`;
            } else if (offset === 1) {
              className += " z-20 translate-y-[10px]";
            } else if (offset === 2) {
              className += " z-10 translate-y-[20px]";
            }
            return (
              <iframe
                key={idx}
                src={offset === 0 ? video.src : ""}
                className={
                  className + " rounded-2xl shadow-2xl w-full h-auto object-cover bg-black pointer-events-auto"
                }
                style={{
                  boxShadow: offset === 0 ? "0 8px 32px rgba(0,0,0,0.4)" : undefined,
                  pointerEvents: offset === 0 ? "auto" : "none",
                  height: 350,
                  minHeight: 320,
                  maxHeight: 400,
                }}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            );
          })}
        </div>
        {/* Right Arrow */}
        <button
          className='absolute xlg:-right-7 right-[-150px] top-1/2 -translate-y-1/2 bg-gray400 bg-opacity-40 hover:bg-opacity-70 text-white rounded-full w-7 h-7 flex items-center justify-center z-10'
          onClick={handleNext}
          aria-label='Next video'>
          <svg width='18' height='18' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
            <path d='M9 5l7 7-7 7' />
          </svg>
        </button>
      </div>
      {/* Slide-up animation keyframes */}
      <style jsx>{`
        .animate-slide-up {
          animation: slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes slideUp {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductDemoSection;
