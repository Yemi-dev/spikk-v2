import React from "react";

const ProductEmptyState = ({ search, category }: { search?: string; category?: string }) => {
  return (
    <div className='w-full flex flex-col items-center justify-center py-16 px-4'>
      {/* <div className='w-24 h-24 mb-6'>
            <Image
              src='/images/empty-state.png'
              alt='No products found'
              width={96}
              height={96}
              className='w-full h-full object-contain'
            />
          </div> */}
      <h3 className='text-xl font-semibold text-gray-900 mb-2'>No Products Found</h3>
      <p className='text-gray500 text-center max-w-md'>
        {search || category
          ? "We couldn't find any products matching your search criteria. Try adjusting your filters or search terms."
          : "There are no products available at the moment. Please check back later."}
      </p>
    </div>
  );
};

export default ProductEmptyState;
