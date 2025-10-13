import React from "react";
import HomeFooter from "@/ui/components/Home/HomeFooter";
import HomeHeader from "@/ui/components/Home/HomeHeader";
import Track from "@/ui/components/Cart/Track";
import SEOHead from "@/ui/components/SEO/SEOHead";
import PageLoader from "@/ui/atoms/PageLoader";
import usePageLoader from "@/hooks/usePageLoader";

const TrackOrder = () => {
  const { isLoading } = usePageLoader();

  return (
    <div className='bg-white font-gilroy min-h-screen relative'>
      <SEOHead
        title='Track Your Order - Spikk'
        description='Track your Spikk order in real-time. View order status, delivery details, and estimated delivery time for your purchases.'
        keywords='track order, order status, delivery tracking, Spikk order, package tracking, order details'
        url='https://spikk.com/cart/track-order'
        type='website'
      />
      <HomeHeader />
      <main className='flex flex-col gap-8 w-full max-w-[1300px] mx-auto pt-32 pb-16 px-4'>
        <Track />
      </main>
      <HomeFooter />
      <PageLoader isLoading={isLoading} />
    </div>
  );
};

export default TrackOrder;
