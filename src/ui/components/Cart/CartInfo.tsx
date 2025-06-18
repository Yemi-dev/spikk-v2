import { colors } from "@/constants/colors";
import CustomButton from "@/ui/atoms/CustomButton";
import CustomTextInput from "@/ui/atoms/inputs/CustomTextField";
import Image from "next/image";
import React, { useEffect } from "react";
import { MdClose } from "react-icons/md";
import CustomTextArea from "@/ui/atoms/inputs/CustomTextArea";
import { useCart } from "@/hooks/cart.hook";
import { useFormik } from "formik";
import * as Yup from "yup";

interface CartFormValues {
  note: string;
  drop_off_address: string;
  drop_off_coordinates: Array<number>;
  contact_no: string;
  total_amount: number;
  type: "shop" | "send";
  scheduled: boolean;
  scheduled_time?: string;
  order_items: Array<{
    product_id: string;
    quantity: number;
  }>;
  payment_type: "pre-paid" | "post-paid";
}

const validationSchema = Yup.object({
  contact_no: Yup.string().required("Phone number is required"),
  drop_off_address: Yup.string().required("Address is required"),
  drop_off_coordinates: Yup.array().of(Yup.number()).required("Coordinates are required"),
  total_amount: Yup.number().required("Total amount is required"),
  type: Yup.string().required("Type is required"),
  scheduled: Yup.boolean(),
  scheduled_time: Yup.string(),
  order_items: Yup.array().of(
    Yup.object({
      product_id: Yup.string().required("Product ID is required"),
      quantity: Yup.number().required("Quantity is required"),
    })
  ),
  payment_type: Yup.string().required("Payment type is required"),
});

const CartInfo = () => {
  const { cartItems, removeFromCart, updateCartItemQuantity, resetCart } = useCart();

  // Cart calculations
  const subTotal = cartItems.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);
  const deliveryFee = 0;
  const discount = 0;
  const total = subTotal + deliveryFee - discount;

  const formik = useFormik<CartFormValues>({
    initialValues: {
      type: "shop",
      contact_no: "",
      drop_off_address: "",
      drop_off_coordinates: [],
      scheduled: false,
      scheduled_time: "",
      order_items: cartItems.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
      })),
      payment_type: "pre-paid",
      note: "",
      total_amount: total,
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: () => {
      // Handle form submission
      // console.log(values);
    },
  });

  // Handlers
  const handleQuantity = (id: string, delta: number) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      const newQuantity = Math.max(1, item.quantity + delta);
      updateCartItemQuantity(id, newQuantity);
    }
  };

  const handleRemove = (id: string) => {
    removeFromCart(id);
  };

  const handleResetCart = () => {
    // formik.resetForm();
    resetCart();
  };

  // console.log(cartItems);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            formik.values.drop_off_address
          )}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
        );
        const data = await response.json();
        // console.log(data);
        if (data.results && data.results[0]) {
          const { lat, lng } = data.results[0].geometry.location;
          formik.setFieldValue("drop_off_coordinates", [lng, lat]);
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    };

    if (formik.values.drop_off_address) {
      fetchCoordinates();
    }
  }, [formik.values.drop_off_address, formik]);

  return (
    <section>
      <div className='w-full max-w-[1300px] mx-auto mb-8 mt-1'>
        <h1 className='text-2xl md:text-3xl font-bold text-black'>CART</h1>
      </div>
      <section className='flex sm:flex-col justify-between items-start gap-4'>
        <section className='flex flex-col gap-4 w-full flex-1'>
          <div className='flex-1 bg-white rounded-xl border border-soft200 shadow-sm p-6 min-w-[320px]'>
            <h2 className='text-lg font-bold mb-6 text-gray900'>List of Items</h2>
            <div className='overflow-x-auto'>
              <table className='w-full min-w-[500px]'>
                <thead className='px-4'>
                  <tr className='text-left px-4 bg-gray100 text-xs font-semibold border-b border-gray200'>
                    <th className='py-2 text-gray700 pl-8'>PRODUCTS</th>
                    <th className='py-2 text-gray700'>PRICE</th>
                    <th className='py-2 text-gray700'>QUANTITY</th>
                    <th className='py-2 text-gray700'>SUB-TOTAL</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                      <tr key={item.id} className='border-b border-gray-100 last:border-0'>
                        <td className='py-4 flex items-center gap-3 min-w-[220px]'>
                          <button
                            className='text-gray300 hover:text-error mr-2 border border-gray200 hover:border-error rounded-full p-1'
                            onClick={() => handleRemove(item.id)}
                            aria-label='Remove item'>
                            <MdClose className='hover:text-error' />
                          </button>
                          <Image
                            src={item.image || "/images/png/demo-poster.png"}
                            alt={item.name}
                            width={40}
                            height={80}
                            className='object-contain'
                          />
                          <span className='text-sm text-black font-medium ml-2'>{item.name}</span>
                        </td>
                        <td className='py-4 text-sm font-medium text-gray700'>
                          ₦{Number(item.price).toLocaleString()}
                        </td>
                        <td className='py-4'>
                          <div className='grid grid-cols-3 items-center rounded border border-gray200 w-fit'>
                            <button
                              className='w-8 h-8 text-lg  text-gray700 hover:bg-gray100'
                              onClick={() => handleQuantity(item.id, -1)}
                              aria-label='Decrease quantity'>
                              –
                            </button>
                            <span className='text-center text-gray700 font-semibold'>
                              {item.quantity.toString().padStart(2, "0")}
                            </span>
                            <button
                              className='w-8 h-8  text-lg  text-gray700 hover:bg-gray100'
                              onClick={() => handleQuantity(item.id, 1)}
                              aria-label='Increase quantity'>
                              +
                            </button>
                          </div>
                        </td>
                        <td className='py-4 text-sm font-semibold text-gray900'>
                          ₦{(Number(item.price) * item.quantity).toLocaleString()}
                        </td>
                        <td></td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className='text-center py-4'>
                        <span className='text-gray700'>No items in cart</span>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className='flex s:flex-col flex-row justify-between items-center mt-6 gap-4'>
              <CustomButton
                bgColor={colors.white}
                color={colors.blue100}
                className='border-2 border-blue100 px-6 py-2 xs:text-sm rounded-lg font-semibold hover:bg-blue100/10 transition-all'
                onClick={() => (window.location.href = "/home")}>
                ← RETURN TO SHOP
              </CustomButton>
              <CustomButton
                bgColor={colors.white}
                color={colors.blue100}
                className='border-2 border-blue100 px-6 py-2 xs:text-sm rounded-lg font-semibold hover:bg-blue100/10 transition-all'
                onClick={handleResetCart}>
                RESET CART
              </CustomButton>
            </div>
          </div>
          <form className='bg-white mt-6 flex flex-col gap-4' onSubmit={formik.handleSubmit}>
            <div className='flex items-center gap-4 mb-2'>
              <button
                type='button'
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  formik.values.type === "shop" ? "border-yellow700" : "border-gray300"
                }`}
                onClick={() => formik.setFieldValue("type", "shop")}
                aria-label='Shop for self'>
                {formik.values.type === "shop" && <span className='w-3 h-3 bg-yellow700 rounded-full block'></span>}
              </button>
              <span className='text-sm font-semibold text-soft300'>Shop for self</span>
            </div>
            {formik.values.type === "shop" && (
              <div className='pl-6 flex flex-col gap-4 mb-8'>
                <CustomTextInput
                  name='contact_no'
                  placeholder='Phone Number'
                  value={formik.values.contact_no}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className='w-full text-gray900 text-sm'
                  label='Phone Number'
                  errorMessage={formik.touched.contact_no && formik.errors.contact_no}
                />
                <CustomTextInput
                  name='drop_off_address'
                  placeholder='Delivery Address'
                  value={formik.values.drop_off_address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className='w-full text-gray900 text-sm'
                  label='Delivery Address'
                  errorMessage={formik.touched.drop_off_address && formik.errors.drop_off_address}
                />
                <h3 className='text-lg font-bold my-4 text-gray900'>Additional Information</h3>
                <CustomTextArea
                  name='note'
                  placeholder='Notes about your order, e.g. special notes for delivery'
                  value={formik.values.note}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className='w-full text-gray900 text-sm'
                  label='Notes (Optional)'
                  rows={3}
                  errorMessage={formik.touched.note && formik.errors.note}
                />
              </div>
            )}
            <div className='flex items-center gap-4'>
              <button
                type='button'
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  formik.values.type === "send" ? "border-yellow700" : "border-gray300"
                }`}
                onClick={() => formik.setFieldValue("type", "send")}
                aria-label='Send to someone'>
                {formik.values.type === "send" && <span className='w-3 h-3 bg-yellow700 rounded-full block'></span>}
              </button>
              <span className='text-sm font-semibold text-soft300'>Send to someone</span>
            </div>
            {formik.values.type === "send" && (
              <div className='pl-6 flex flex-col gap-4 mb-8'>
                <CustomTextInput
                  name='someoneAddress'
                  placeholder='Address'
                  value={formik.values.drop_off_address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className='w-full text-gray900 text-sm'
                  label='Address'
                  errorMessage={formik.touched.drop_off_address && formik.errors.drop_off_address}
                />
                <div className='flex gap-4'>
                  <CustomTextInput
                    name='someonePhone'
                    placeholder='Phone Number'
                    value={formik.values.contact_no}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='w-full text-gray900 text-sm'
                    label='Phone Number'
                    errorMessage={formik.touched.contact_no && formik.errors.contact_no}
                  />
                </div>
                <h3 className='text-lg font-bold my-4 text-gray900'>Additional Information</h3>
                <CustomTextArea
                  name='someoneNotes'
                  placeholder='Notes about your order, e.g. special notes for delivery'
                  value={formik.values.note}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className='w-full text-gray900 text-sm'
                  label='Notes (Optional)'
                  rows={3}
                  errorMessage={formik.touched.note && formik.errors.note}
                />
              </div>
            )}
          </form>
        </section>
        {/* Cart Totals & Form */}
        <aside className='w-full max-w-[400px] flex flex-col gap-8'>
          {/* Card Totals */}
          <div className='bg-white rounded-xl border border-soft200 shadow-sm p-6'>
            <h3 className='text-lg font-bold mb-4 text-gray900'>Card Totals</h3>
            <div className='flex flex-col gap-2 text-sm mb-4'>
              <div className='flex justify-between'>
                <span className='text-gray600'>Sub-total</span>
                <span className='font-semibold text-gray900'>₦{subTotal.toLocaleString()}</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-gray600'>Delivery fee</span>
                <span className='font-semibold text-gray900'>Free</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-gray600'>Discount</span>
                <span className='font-semibold text-gray900'>₦{discount.toLocaleString()}</span>
              </div>
              <div className='flex justify-between text-base font-bold mt-2'>
                <span className='text-gray600'>Total</span>
                <span className='font-semibold text-gray900'>₦{total.toLocaleString()}</span>
              </div>
            </div>
            <CustomButton
              bgColor={colors.textYellow}
              color={colors.textDark}
              className='w-full font-bold text-base py-3 mt-2 rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed'
              type='submit'
              disabled={!cartItems.length || formik.isSubmitting || Object.keys(formik.errors).length > 0}
              onClick={formik.handleSubmit}>
              SUBMIT REQUEST →
            </CustomButton>
          </div>
        </aside>
      </section>
    </section>
  );
};

export default CartInfo;
