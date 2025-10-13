import { colors } from "@/constants/colors";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  // Generate page numbers to display with ellipsis logic
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5; // Maximum number of page buttons to show

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Always show first page
    pages.push(1);

    if (currentPage > 3) {
      pages.push("ellipsis-start");
    }

    // Show pages around current page
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("ellipsis-end");
    }

    // Always show last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const getMobilePageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // For mobile: show current, and maybe one on each side or ellipsis
    if (currentPage === 1) {
      pages.push(1, 2, "ellipsis-end", totalPages);
    } else if (currentPage === totalPages) {
      pages.push(1, "ellipsis-start", totalPages - 1, totalPages);
    } else {
      pages.push(1, "ellipsis-start", currentPage, "ellipsis-end", totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();
  const mobilePageNumbers = getMobilePageNumbers();

  return (
    <div className='flex items-center justify-center gap-2 sm:gap-1 mt-10 flex-wrap'>
      {/* Prev Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label='Previous page'
        className={`w-9 h-9 sm:w-8 sm:h-8 rounded-full border border-yellow700 flex items-center justify-center text-sm font-semibold transition-all duration-200 ${
          currentPage === 1 ? "bg-gray-100 opacity-50 cursor-not-allowed" : "bg-white hover:bg-yellow100 cursor-pointer"
        }`}>
        <FaArrowLeft color={currentPage === 1 ? colors.gray400 : colors.yellow700} size={16} className='sm:w-3' />
      </button>

      {/* Desktop Page Buttons */}
      <div className='hidden md:flex items-center gap-2'>
        {pageNumbers.map((page, idx) => {
          if (typeof page === "string") {
            return (
              <span key={`${page}-${idx}`} className='px-2 text-gray400 select-none'>
                ...
              </span>
            );
          }

          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`min-w-[36px] h-9 px-3 rounded-full border flex items-center justify-center text-sm font-semibold transition-all cursor-pointer duration-200 ${
                currentPage === page
                  ? "bg-yellow700 text-black border-yellow700"
                  : "bg-white border-gray300 hover:bg-yellow100 hover:border-yellow700 hover:text-black"
              }`}>
              {page}
            </button>
          );
        })}
      </div>

      {/* Mobile Page Buttons */}
      <div className='flex md:hidden items-center gap-1'>
        {mobilePageNumbers.map((page, idx) => {
          if (typeof page === "string") {
            return (
              <span key={`${page}-${idx}`} className='px-1 text-gray400 select-none text-xs'>
                ...
              </span>
            );
          }

          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`min-w-[32px] h-8 px-2 rounded-full border flex items-center justify-center text-xs font-semibold transition-all cursor-pointer duration-200 ${
                currentPage === page
                  ? "bg-yellow700 text-black border-yellow700"
                  : "bg-white border-gray300 hover:bg-yellow100 hover:border-yellow700"
              }`}>
              {page}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label='Next page'
        className={`w-9 h-9 sm:w-8 sm:h-8 rounded-full border border-yellow700 flex items-center justify-center text-sm font-semibold transition-all duration-200 ${
          currentPage === totalPages
            ? "bg-gray-100 opacity-50 cursor-not-allowed"
            : "bg-white hover:bg-yellow100 cursor-pointer"
        }`}>
        <FaArrowRight
          color={currentPage === totalPages ? colors.gray400 : colors.yellow700}
          size={16}
          className='sm:w-3'
        />
      </button>
    </div>
  );
};

export default Pagination;
