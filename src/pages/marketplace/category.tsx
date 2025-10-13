import HomeFooter from "@/ui/components/Home/HomeFooter";
import HomeHeader from "@/ui/components/Home/HomeHeader";
import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useRouter } from "next/router";
import ProductGrid from "@/ui/components/Marketplace/ProductGrid";
import Image from "next/image";
import { useGetCategoryByID, useGetCategoryByRef } from "@/hooks/marketplace.hook";
import CategoriesSkeleton from "@/ui/components/Home/CategoriesLoader";

const CategoryPage = () => {
  const router = useRouter();
  const { ref } = router.query;
  const [productsPage, setProductsPage] = useState(1);
  const [search, setSearch] = useState("");
  const isRouterReady = router.isReady && ref;

  const {
    data: category,
    isLoading,
    isFetching,
    isPending,
  } = useGetCategoryByRef(
    ref as string,
    {
      page: productsPage,
      pageSize: 20,
      name: search,
    },
    {
      enabled: !!isRouterReady,
    }
  );
  const categoryProducts = category?.data?.data?.products ?? [];
  const categoryTotalPages = category?.data?.data?.pagination?.totalPages ?? 1;
  const { data: categoryDetail, isPending: isCategoryDetailPending } = useGetCategoryByID(ref as string, {
    enabled: !!isRouterReady,
  });
  const categoryDetails = categoryDetail?.data?.data;
  if (!router.isReady) {
    return (
      <div className='bg-white font-gilroy relative'>
        <HomeHeader />
        <main className='flex flex-col gap-[32px] w-full row-start-2 items-center sm:items-start text-textDark bg-white'>
          <div className='w-full my-10 pt-20 max-w-[1300px] mx-auto px-12 sm:px-6'>
            <div className='flex items-center gap-2 justify-start w-full mb-12'>
              <FaAngleLeft size={18} />
              <div className='w-[300px] h-6 bg-soft200 animate-pulse rounded-sm' />
            </div>
            <div className='w-full h-[450px] bg-soft200 animate-pulse rounded-sm mb-10' />
            <CategoriesSkeleton />
          </div>
        </main>
        <HomeFooter />
      </div>
    );
  }

  return (
    <div className='bg-white font-gilroy relative'>
      <HomeHeader />
      <main className='flex flex-col gap-[32px] w-full row-start-2 items-center sm:items-start text-textDark bg-white'>
        <div className='w-full my-10 pt-20 max-w-[1300px] mx-auto px-12 sm:px-6'>
          <button className='flex items-center gap-2  justify-start w-full mb-12' onClick={() => router.back()}>
            <FaAngleLeft size={18} />
            {isCategoryDetailPending ? (
              <div className='w-[300px] h-6 bg-soft200 animate-pulse rounded-sm' />
            ) : (
              <h2 className='text-2xl font-bold'>{categoryDetails?.name}</h2>
            )}
          </button>
          <div className='w-full mt-8'>
            {isCategoryDetailPending ? (
              <div className='w-full h-[450px] bg-soft200 animate-pulse rounded-sm mb-10' />
            ) : (
              <Image
                src={categoryDetails?.banners?.[0]?.trimEnd() || "/images/png/Banner.png"}
                alt='category'
                width={1240}
                height={450}
                className='w-full h-full object-cover mb-10'
              />
            )}
            {isLoading ? (
              <CategoriesSkeleton />
            ) : (
              <ProductGrid
                products={categoryProducts}
                page={productsPage}
                setPage={setProductsPage}
                totalPages={categoryTotalPages}
                search={search}
                setSearch={setSearch}
                isLoading={isLoading || isFetching || isPending}
                limit={20}
              />
            )}
          </div>
        </div>
      </main>
      <HomeFooter />
    </div>
  );
};

export default CategoryPage;
