import React, { useState } from "react";
import Image from "next/image";
import CustomButton from "@/ui/atoms/CustomButton";
import CustomTextField from "@/ui/atoms/inputs/CustomTextField";
import CustomSelectInput from "@/ui/atoms/inputs/CustomSelectInput";
import { IoSearch } from "react-icons/io5";
import Pagination from "../../atoms/Pagination";
import QuickView from "./QuickView";
import { formatPrice } from "@/utils";
import ProductEmptyState from "../Shared/ProductEmptyState";
import CategoriesSkeleton from "../Home/CategoriesLoader";
import PageLoader from "@/ui/atoms/PageLoader";

// Placeholder product and category data
export type Product = {
  id: string;
  name: string;
  image: string;
  price: string;
  category: string;
  description?: string;
};

// export const placeholderProducts: Product[] = Array.from({ length: 36 }).map((_, i) => ({
//   id: String(i + 1),
//   name: "5 Alive Pulpy Orange Fruit Drink 1000ml",
//   image: "/images/png/5alive.png",
//   price: "₦1,350.00",
//   category: "Food and Drinks",
// }));

// export const placeholderCategories = [
//   { label: "All", value: "All" },
//   { label: "Food and Drinks", value: "Food and Drinks" },
//   { label: "Snacks", value: "Snacks" },
//   { label: "Household Essentials", value: "Household Essentials" },
// ];

const ProductGrid = ({
  products = [],
  categories = [],
  page = 1,
  setPage,
  totalPages = 1,
  search,
  setSearch,
  isLoading,
  setSelectedCategory,
  category,
  limit = 20,
}: {
  products?: Product[];
  categories?: { label: string; value: string }[];
  page: number;
  setPage: (page: number) => void;
  totalPages?: number;
  search: string;
  setSearch: (search: string) => void;
  isLoading: boolean;
  category?: string;
  setSelectedCategory?: (category: string) => void;
  limit?: number;
}) => {
  const [viewProduct, setViewProduct] = useState<Product | null>(null);
  // Handlers
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };
  const handleCategoryChange = (val: string) => {
    setPage(1);
    if (setSelectedCategory) {
      setSelectedCategory(val);
    }
  };
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <section className='w-full max-w-[1300px] mx-auto mt-16 mb-20 flex flex-col items-center'>
      {/* Search and Filter Row */}
      <div className='w-full flex flex-col md:flex-row justify-between items-center gap-4 mb-8'>
        <div className='flex-1 w-full md:max-w-[350px]'>
          <CustomTextField
            placeholder='Search for anything...'
            name='search'
            value={search}
            onChange={handleSearchChange}
            className='w-[500px] text-sm'
            iconEnd={<IoSearch size={20} />}
          />
        </div>
        {categories && categories.length > 0 && (
          <div className='flex items-center gap-2 w-full md:w-auto justify-end'>
            <span className='text-gray-500 text-sm font-medium'>Category:</span>
            <CustomSelectInput
              options={categories}
              name='category'
              value={category}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className='min-w-[180px] text-sm'
              placeholder='Select Category'
            />
          </div>
        )}
      </div>

      {/* Empty State */}
      {products.length === 0 && !isLoading && <ProductEmptyState search={search} category={category} />}

      {/* Product Grid */}
      {isLoading ? (
        <CategoriesSkeleton count={limit} />
      ) : (
        <>
          <div className='w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
            {products.map((product: Product) => (
              <button
                key={product.id}
                onClick={() => setViewProduct(product)}
                className='flex flex-col items-start justify-end bg-white border border-soft200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer min-h-[220px] hover:opacity-60'>
                <Image
                  src={product.image.trimEnd()}
                  alt={product.name}
                  width={150}
                  height={140}
                  className='mb-2 object-contain h-[100px] w-full'
                />
                <span className='text-xs md:text-sm text-gray900 text-left leading-tight mb-1 line-clamp-2'>
                  {product.name}
                </span>
                <span className='text-blue100 text-sm font-semibold mt-1 text-left'>
                  {formatPrice(Number(product.price))}
                </span>
              </button>
            ))}
          </div>
        </>
      )}
      {/* Pagination */}
      {<Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />}

      {/* Can't find section */}
      <div className='w-full flex flex-col items-center mt-16'>
        <span className='text-center text-black font-semibold text-base mb-4'>
          CAN&apos;T FIND WHAT YOU ARE LOOKING FOR?
        </span>
        <CustomButton
          bgColor='#FCC122'
          color='#232323'
          className='font-bold px-8 py-3 text-base mt-2 hover:opacity-90 transition-all'>
          SEND A REQUEST
        </CustomButton>
      </div>
      {viewProduct && <QuickView viewProduct={viewProduct} setViewProduct={setViewProduct} />}
      <PageLoader isLoading={isLoading} />
    </section>
  );
};

export default ProductGrid;
