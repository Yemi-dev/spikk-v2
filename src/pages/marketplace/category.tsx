import HomeFooter from "@/ui/components/Home/HomeFooter";
import HomeHeader from "@/ui/components/Home/HomeHeader";
import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useRouter } from "next/router";
import ProductGrid from "@/ui/components/Marketplace/ProductGrid";
import Image from "next/image";
import { useGetCategoryByRef } from "@/hooks/marketplace.hook";
import CategoriesSkeleton from "@/ui/components/Home/CategoriesLoader";

const CategoryPage = () => {
  const router = useRouter();
  const { ref } = router.query;
  const [productsPage, setProductsPage] = useState(1);
  const [search, setSearch] = useState("");
  const {
    data: category,
    isLoading,
    isFetching,
    isPending,
  } = useGetCategoryByRef(ref as string, {
    page: productsPage,
    limit: 20,
    search: search,
  });
  const categoryProducts = category?.data?.data ?? [];
  const categoryInfo = category?.data?.data[0]?.category ?? {};
  const categoryTotalPages = category?.data?.pagination?.totalPages ?? 1;
  console.log({ category });

  return (
    <div className='bg-white font-gilroy relative'>
      <HomeHeader />
      <main className='flex flex-col gap-[32px] w-full row-start-2 items-center sm:items-start text-textDark bg-white'>
        <div className='w-full my-10 pt-20 max-w-[1300px] mx-auto px-12 sm:px-6'>
          <button className='flex items-center gap-2  justify-start w-full mb-12' onClick={() => router.back()}>
            <FaAngleLeft size={18} />
            <h2 className='text-2xl font-bold'>{categoryInfo.name}</h2>
          </button>
          <div className='w-full mt-8'>
            <Image
              src={"/images/png/Banner.png"}
              alt='category'
              width={1240}
              height={450}
              className='w-full h-full object-cover mb-10'
            />
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
