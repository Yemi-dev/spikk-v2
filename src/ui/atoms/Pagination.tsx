import { colors } from "@/constants/colors";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;
  return (
    <div className='flex items-center gap-3 mt-10'>
      {/* Prev Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
        aria-label='Previous page'
        className={`w-8 h-8 rounded-full border border-yellow700 flex items-center justify-center text-sm font-semibold transition-all duration-200 cursor-pointer ${
          currentPage === 1 ? " cursor-not-allowed" : " cursor-pointer bg-white text-gray500"
        }`}>
        <FaArrowLeft color={colors.yellow700} size={18} />
      </button>
      {/* Page Buttons */}
      {Array.from({ length: totalPages }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => onPageChange(idx + 1)}
          className={`w-8 h-8 rounded-full border border-gray300 flex items-center justify-center text-sm font-semibold transition-all cursor-pointer duration-200 ${
            currentPage === idx + 1
              ? "bg-yellow700 text-black border-yellow700"
              : "bg-white hover:bg-yellow100 hover:text-black"
          }`}>
          {idx + 1}
        </button>
      ))}
      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label='Next page'
        className={`w-8 h-8 rounded-full border border-yellow700 flex items-center justify-center text-sm font-semibold transition-all duration-200 cursor-pointer ${
          currentPage === totalPages ? "bg-white text-gray400 cursor-not-allowed" : "cursor-pointer"
        }`}>
        <FaArrowRight color={colors.yellow700} size={18} />
      </button>
    </div>
  );
};

export default Pagination;
