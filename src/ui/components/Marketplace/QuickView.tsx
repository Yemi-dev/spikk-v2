import Image from "next/image";
import React, { useState } from "react";
import CenterModal from "../Modal/CenterModal";
import { IoClose } from "react-icons/io5";
import CustomButton from "@/ui/atoms/CustomButton";
import { Product } from "./ProductGrid";
import { colors } from "@/constants/colors";
import { formatPrice } from "@/utils";
import { useRouter } from "next/router";
import { FaArrowRight } from "react-icons/fa6";
import { useCart } from "@/hooks/cart.hook";
import { toast } from "react-toastify";

const QuickView = ({
  viewProduct,
  setViewProduct,
}: {
  viewProduct: Product;
  setViewProduct: (product: Product | null) => void;
}) => {
  const router = useRouter();
  const { cartItems, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const handleAddToCart = () => {
    addToCart({
      id: viewProduct.id,
      name: viewProduct.name,
      image: viewProduct.image,
      price: Number(viewProduct.price),
      category: viewProduct.category,
      quantity,
    });
    toast.success(`${quantity} ${viewProduct.name} added to cart`);
    setViewProduct(null);
  };

  const isAlreadyInCart = cartItems.some((item) => item.id === viewProduct.id);
  const calculatedPrice = Number(viewProduct.price) * quantity;

  return (
    <CenterModal
      isOpen={!!viewProduct}
      toggleModal={() => setViewProduct(null)}
      width='900px'
      padding='2.5rem 2rem'
      borderRadius='20px'>
      <button
        className='absolute top-4 right-4 text-2xl text-gray-500 hover:border hover:border-gray200 p-2'
        onClick={() => setViewProduct(null)}
        aria-label='Close'>
        <IoClose color={colors.soft300} size={25} />
      </button>
      <div className='flex flex-col md:flex-row gap-8 w-full max-w-[850px] mt-5'>
        {/* Left: Product Image */}
        <div className='flex-1 flex items-center justify-center min-w-[220px]'>
          <div className='relative'>
            {isImageLoading && (
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='w-8 h-8 border-4 border-yellow700 border-t-transparent rounded-full animate-ping'></div>
              </div>
            )}
            <Image
              src={viewProduct.image}
              alt={viewProduct.name}
              width={220}
              height={350}
              className='object-contain w-[180px] h-[320px] md:w-[220px] md:h-[350px]'
              onLoadingComplete={() => setIsImageLoading(false)}
            />
          </div>
        </div>
        {/* Right: Product Info */}
        <div className='flex-[2] flex flex-col gap-2 relative'>
          <h2 className='text-2xl md:text-3xl font-bold text-soft300 mb-1 mt-2 md:mt-0'>{viewProduct.name}</h2>
          <span className='text-blue100 text-lg font-semibold mb-4'>{formatPrice(calculatedPrice)}</span>
          <div className='mb-6'>
            <label className='block text-soft300 mb-2 font-medium'>How many quantity do you want?</label>
            <input
              type='number'
              className='w-20 p-2 rounded-md shadow bg-white border border-gray200 text-soft300 text-lg focus:outline-none disabled:opacity-50'
              min={1}
              max={10}
              value={quantity}
              disabled={isAlreadyInCart}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>
          <div className='flex gap-4 items-center w-full'>
            <CustomButton
              bgColor={isAlreadyInCart ? colors.yellow100 : colors.yellow700}
              color={isAlreadyInCart ? "#2D2D2D" : "#2D2D2D"}
              className='font-bold px-8 py-3 text-base disabled:opacity-50 mb-8 shadow-md hover:opacity-90 transition-all w-full max-w-[320px]'
              onClick={handleAddToCart}
              disabled={isAlreadyInCart}>
              {isAlreadyInCart ? "Added" : "Add to Cart"}
            </CustomButton>
            {isAlreadyInCart && (
              <CustomButton
                onClick={() => router.push("/cart")}
                bgColor={"transparent"}
                color={colors.blue100}
                borderRadius={`rounded-[40px]`}
                className='font-semibold whitespace-nowrap w-full'>
                View Cart <FaArrowRight />
              </CustomButton>
            )}
          </div>
          <div className='mb-4'>
            <h3 className='font-bold text-soft300 text-lg mt-4'>Product Details</h3>
            <p className='text-soft300 text-base'>{viewProduct.description}</p>
          </div>
          {/* <div className='mb-4'>
            <h3 className='font-bold text-lg mb-2 text-soft300'>Features</h3>
            <ul className='list-disc pl-5 text-soft300 text-base'>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div> */}
          {/* <p className='text-soft300 text-base mt-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id leo nec ante fringilla efficitur.
            Mauris ipsum lacus, congue id purus venenatis, mattis eleifend justo. Nunc cursus tempor porttitor. Morbi
            mollis diam orci, nec eleifend urna volutpat sed.
          </p> */}
        </div>
      </div>
    </CenterModal>
  );
};

export default QuickView;
