import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { colors } from "@/constants/colors";
import CustomButton from "@/ui/atoms/CustomButton";
import { FaArrowRight } from "react-icons/fa6";
import {
  useGetAllCategories,
  useGetAllMarketplaceProducts,
  useGetAllPopularProducts,
  useGetAllSpecialProducts,
} from "@/hooks/marketplace.hook";
import { useRouter } from "next/router";
import CategoriesSkeleton from "../Home/CategoriesLoader";
import ProductGrid from "./ProductGrid";

interface SpecialProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  endTime?: string;
  isSpecial?: boolean;
}

const MarketplaceLanding = () => {
  const { data: categoriesData, isLoading } = useGetAllCategories();
  const { data: specialProductsData, isLoading: isSpecialProductsLoading } = useGetAllSpecialProducts();
  const { data: popularProductsData, isLoading: isPopularProductsLoading } = useGetAllPopularProducts();
  const [productsPage, setProductsPage] = useState(1);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const categories = categoriesData?.data?.data?.categories || [];
  const specialProducts = specialProductsData?.data?.data?.products || [];
  const popularProducts = popularProductsData?.data?.data?.products || [];
  const productsLoading = isSpecialProductsLoading || isPopularProductsLoading;
  const allBannerProducts = [...specialProducts, ...popularProducts];
  const [selectedCategory, setSelectedCategory] = useState("");
  const {
    data: marketplaceProductsData,
    isLoading: isMarketplaceProductsLoading,
    isFetching: isMarketplaceProductsFetching,
    isPending: isMarketplaceProductsPending,
  } = useGetAllMarketplaceProducts({
    page: productsPage,
    pageSize: 40,
    search: search,
    name: "",
    category: selectedCategory,
  });
  const marketplaceProducts = useMemo(
    () => marketplaceProductsData?.data?.data?.products || [],
    [marketplaceProductsData]
  );
  // console.log({ marketplaceProducts });
  const marketplaceProductsTotalPages = marketplaceProductsData?.data?.data?.pagination?.totalPages || 1;
  // console.log({ marketplaceProducts });
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (allBannerProducts.length > 1) {
      const interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % allBannerProducts.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [allBannerProducts.length]);

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <div className='w-full flex flex-col items-center bg-white min-h-screen py-8 px-2'>
      {/* Title */}
      <div className='w-full max-w-[1300px] mx-auto mb-8 mt-4'>
        <h1 className='text-2xl md:text-3xl font-bold text-black mt-16'>MARKETPLACE</h1>
      </div>
      {/* Hero Section */}
      <section className='w-full max-w-[1300px] mx-auto bg-[#F3FAFF] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:px-20 md:py-12 mb-12 relative'>
        {productsLoading ? (
          <div className='w-full h-[400px] flex items-center justify-center'>
            <div className='w-8 h-8 border-4 border-yellow700 border-t-transparent rounded-full animate-spin'></div>
          </div>
        ) : (
          allBannerProducts.length > 0 && (
            <>
              {allBannerProducts.map((product: SpecialProduct, index: number) => (
                <div
                  key={index}
                  className={`w-full flex flex-col md:flex-row items-center justify-between gap-8 transition-opacity duration-500 ${
                    activeSlide === index ? "opacity-100" : "opacity-0 hidden"
                  }`}>
                  {/* Left: Text */}
                  <div className='flex-1 flex flex-col gap-4'>
                    <div className='bg-blue200 text-white px-2 py-1 rounded-md w-fit text-xl font-bold'>
                      {product.isSpecial ? "SPECIAL" : "HOT"} SALES
                    </div>
                    <h2 className='text-5xl sm:text-3xl text-black leading-tight font-bold'>{product.name}</h2>
                    <p className='text-xl text-black max-w-md font-medium'>{product.description}</p>
                    <div className='flex flex-col gap-1 mt-2'>
                      {product.price && (
                        <span className='text-sm text-gray-500'>
                          Just for: <span className='font-bold text-lg text-black'>₦{product.price}</span>
                        </span>
                      )}
                      <span className='text-sm text-error font-medium'>Ending soon</span>
                    </div>
                    <CustomButton
                      bgColor={colors.yellow700}
                      color={colors.black}
                      className='w-fit mt-4 font-semibold flex items-center gap-2'
                      borderRadius='8px'
                      onClick={() => router.push(`/marketplace/product/${product.id}`)}>
                      ORDER NOW <FaArrowRight />
                    </CustomButton>
                  </div>
                  {/* Right: Image */}
                  <div className='flex-1 flex items-center justify-center'>
                    <Image
                      src={product.image.trim()}
                      alt={"special"}
                      width={350}
                      height={220}
                      className='rounded-2xl object-cover shadow-lg w-[350px] h-[220px]'
                    />
                  </div>
                </div>
              ))}
              {/* Carousel Navigation */}
              {allBannerProducts.length > 1 && (
                <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
                  {allBannerProducts.map((_: SpecialProduct, index: number) => (
                    <button
                      key={index}
                      onClick={() => handleSlideChange(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        activeSlide === index ? "bg-blue200 w-4" : "bg-gray300"
                      }`}
                    />
                  ))}
                </div>
              )}
            </>
          )
        )}
      </section>
      {/* Categories Grid */}
      <section className='w-full max-w-[1300px] mx-auto mt-2'>
        <div className='w-full flex flex-col items-center mt-6'>
          {isLoading ? (
            <CategoriesSkeleton />
          ) : (
            <div className='flex flex-wrap justify-center gap-2 w-full'>
              {/* Category Cards */}
              {categories.map(
                (category: { image: string; name: string; banners: string[]; id: string }, index: number) => (
                  <button
                    key={index}
                    className='flex flex-col items-center justify-center bg-white border border-soft200 rounded-xl px-3 py-3 w-[150px] h-[200px] shadow-sm hover:opacity-60 hover:shadow-md transition-all duration-300'
                    onClick={() => {
                      router.push(`/marketplace/category?type=${category.name}&ref=${category.id}`);
                    }}>
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={100}
                      height={140}
                      className='w-[120px] h-[140px] mb-3 object-cover object-center'
                    />
                    <span className='text-sm font-medium text-black text-center'>{category.name}</span>
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </section>
      <ProductGrid
        products={marketplaceProducts}
        page={productsPage}
        setPage={setProductsPage}
        setSelectedCategory={setSelectedCategory}
        category={selectedCategory}
        categories={categories.map((category: { name: string; id: string }) => ({ label: category.name, value: category.id }))}
        totalPages={marketplaceProductsTotalPages}
        search={search}
        setSearch={setSearch}
        isLoading={isMarketplaceProductsLoading || isMarketplaceProductsFetching || isMarketplaceProductsPending}
        limit={20}
      />
    </div>
  );
};

export default MarketplaceLanding;
