import { useGetAllCategories } from "@/hooks/marketplace.hook";
import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";
import CategoriesSkeleton from "./CategoriesLoader";
import Link from "next/link";

const Categories = () => {
  const { data: categoriesData, isLoading } = useGetAllCategories();
  const router = useRouter();
  const categories = categoriesData?.data?.data?.categories || [];

  //   {
  //     image: "/images/svg/groceries.svg",
  //     title: "Food & Groceries",
  //   },
  //   {
  //     image: "/images/svg/drinks.svg",
  //     title: "Drinks and Juices",
  //   },
  //   {
  //     image: "/images/svg/wines.svg",
  //     title: "Alcoholic Drinks, Wines & Spirit",
  //   },
  //   {
  //     image: "/images/svg/essentials.svg",
  //     title: "Household Essentials",
  //   },
  //   {
  //     image: "/images/svg/eggs.svg",
  //     title: "Dairy products & Eggs",
  //   },
  //   {
  //     image: "/images/svg/pet-supplies.svg",
  //     title: "Pet Supplies",
  //   },
  //   {
  //     image: "/images/svg/wellness.svg",
  //     title: "Health and Wellness",
  //   },
  // ];
  return (
    <section className='w-full flex flex-col items-center gap-10 mt-8 px-4 max-w-[1300px] mx-auto py-14'>
      {/* Shop/Send Anything Row */}
      <div className='w-full flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center'>
        {/* Shop Anything */}
        <div className='flex flex-row items-center bg-white border border-gray300 rounded-xl p-4 flex-1 min-w-[280px] max-w-[520px]'>
          <div className='flex-shrink-0 h-[121px] w-[123px] flex items-center justify-center bg-soft100 rounded-lg mr-4'>
            {/* Replace with actual icon */}
            <Image
              src='/images/svg/ShoppingCart.svg'
              width={64}
              height={64}
              alt='Shop Anything'
              className='w-[64px] h-[64px]'
            />
          </div>
          <div>
            <h3 className='text-xl font-bold text-black mb-1'>Shop Anything</h3>
            <p className='text-textGray text-sm mb-3'>Have a Picker help you with your shopping needs.</p>
            <a href='#' className='text-blue100 text-base hover:underline'>
              Get Started ↗
            </a>
          </div>
        </div>
        {/* Send Anything */}
        <div className='flex flex-row items-center bg-white border border-gray300 rounded-xl p-4 flex-1 min-w-[280px] max-w-[520px]'>
          <div className='flex-shrink-0 w-[123px] h-[121px] flex items-center justify-center bg-soft100 rounded-lg mr-4'>
            {/* Replace with actual icon */}
            <Image src='/images/svg/Box.svg' width={64} height={64} alt='Send Anything' className='w-[64px] h-[64px]' />
          </div>
          <div>
            <h3 className='text-xl font-bold text-black mb-1'>Send Anything</h3>
            <p className='text-textGray text-sm mb-3'>Send anything to your friends and family easily.</p>
            <a href='#' className='text-blue100 text-base hover:underline'>
              Get Started ↗
            </a>
          </div>
        </div>
      </div>
      {/* Categories Section */}
      <div className='w-full flex flex-col items-center mt-6'>
        <h2 className='text-2xl md:text-3xl font-bold text-black mb-8 text-center'>SHOP WITH CATEGORIES</h2>
        {isLoading ? (
          <CategoriesSkeleton />
        ) : (
          <div className='flex flex-wrap justify-center gap-2 w-full'>
            {categories.map(
              (category: { image: string; name: string; banners: string[]; id: string; web_image?: string }, index: number) => (
                <button
                  key={index}
                  className='flex flex-col items-center justify-center bg-white border border-soft200 rounded-xl p-3 w-[165px] h-[200px] shadow-sm hover:bg-soft200 hover:shadow-md transition-all duration-300'
                  onClick={() => {
                    router.push(`/marketplace/category?type=${category.name}&ref=${category.id}`);
                  }}>
                  <Image
                    src={category?.web_image || category.image}
                    alt={category.name}
                    width={100}
                    height={100}
                    className='mb-3 object-contaiin object-center h-[140px] w-[110px] max-h-[140px] max-w-[110px]'
                  />
                  <span className='text-sm font-medium text-black text-center line-clamp-2'>{category.name}</span>
                </button>
              )
            )}
          </div>
        )}
        <Link
          href='/marketplace'
          className='mt-8 text-blue100 text-base font-semibold flex items-center gap-2 hover:underline'>
          GO TO MARKETPLACE <span className='text-lg'>→</span>
        </Link>
      </div>
    </section>
  );
};

export default Categories;
