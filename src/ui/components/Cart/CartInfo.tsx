import { colors } from "@/constants/colors";
import CustomButton from "@/ui/atoms/CustomButton";
import CustomTextInput from "@/ui/atoms/inputs/CustomTextField";
import Image from "next/image";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import CustomSelectInput from "@/ui/atoms/inputs/CustomSelectInput";
import CustomTextArea from "@/ui/atoms/inputs/CustomTextArea";
// Mock cart data
const initialCart = [
  {
    id: "1",
    name: "5 Alive Pulpy Orange Fruit Drink 1000ml",
    image: "/images/png/5alive.png",
    price: 1350,
    quantity: 1,
  },
  {
    id: "2",
    name: "5 Alive Pulpy Orange Fruit Drink 1000ml",
    image: "/images/png/5alive.png",
    price: 1350,
    quantity: 2,
  },
];
const CartInfo = () => {
  const [cart, setCart] = useState(initialCart);
  const [shopFor, setShopFor] = useState("self");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [someoneFirstName, setSomeoneFirstName] = useState("");
  const [someoneLastName, setSomeoneLastName] = useState("");
  const [someoneAddress, setSomeoneAddress] = useState("");
  const [someoneRegion, setSomeoneRegion] = useState("");
  const [someoneCity, setSomeoneCity] = useState("");
  const [someonePhone, setSomeonePhone] = useState("");
  const [someoneEmail, setSomeoneEmail] = useState("");
  const [someoneNotes, setSomeoneNotes] = useState("");

  // Example options for region/state and city
  const regionOptions = [
    { value: "lagos", label: "Lagos" },
    { value: "abuja", label: "Abuja" },
    { value: "rivers", label: "Rivers" },
  ];
  const cityOptions = [
    { value: "ikeja", label: "Ikeja" },
    { value: "lekki", label: "Lekki" },
    { value: "victoria_island", label: "Victoria Island" },
  ];

  // Cart calculations
  const subTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 0;
  const discount = 0;
  const total = subTotal + deliveryFee - discount;

  // Handlers
  const handleQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item))
    );
  };
  const handleRemove = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  const handleUpdateCart = () => {
    // Placeholder for API integration
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for API integration
  };
  const handleVoucherSubmit = () => {
    // Placeholder for voucher API integration
  };

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
                  {cart.map((item) => (
                    <tr key={item.id} className='border-b border-gray-100 last:border-0'>
                      <td className='py-4 flex items-center gap-3 min-w-[220px]'>
                        <button
                          className='text-gray300 hover:text-error mr-2 border border-gray200 hover:border-error rounded-full p-1'
                          onClick={() => handleRemove(item.id)}
                          aria-label='Remove item'>
                          <MdClose className='hover:text-error' />
                        </button>
                        <Image src={item.image} alt={item.name} width={40} height={80} className='object-contain' />
                        <span className='text-sm text-black font-medium ml-2'>{item.name}</span>
                      </td>
                      <td className='py-4 text-sm font-medium text-gray700'>₦{item.price.toLocaleString()}</td>
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
                        ₦{(item.price * item.quantity).toLocaleString()}
                      </td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className='flex s:flex-col flex-row justify-between items-center mt-6 gap-4'>
              <CustomButton
                bgColor={colors.white}
                color={colors.blue100}
                className='border-2 border-blue100 px-6 py-2 rounded-lg font-semibold hover:bg-blue100/10 transition-all'
                onClick={() => (window.location.href = "/marketplace")}>
                ← RETURN TO SHOP
              </CustomButton>
              <CustomButton
                bgColor={colors.white}
                color={colors.blue100}
                className='border-2 border-blue100 px-6 py-2 rounded-lg font-semibold hover:bg-blue100/10 transition-all'
                onClick={handleUpdateCart}>
                UPDATE CART
              </CustomButton>
            </div>
          </div>
          <form className='bg-white mt-6 flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className='flex items-center gap-4 mb-2'>
              <button
                type='button'
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  shopFor === "self" ? "border-yellow700" : "border-gray300"
                }`}
                onClick={() => setShopFor("self")}
                aria-label='Shop for self'>
                {shopFor === "self" && <span className='w-3 h-3 bg-yellow700 rounded-full block'></span>}
              </button>
              <span className='text-sm font-semibold text-soft300'>Shop for self</span>
            </div>
            {shopFor === "self" && (
              <div className='pl-6 flex flex-col gap-4 mb-8'>
                <CustomTextInput
                  name='phone'
                  placeholder='Phone Number'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className='w-full text-gray900 text-sm'
                  label='Phone Number'
                />
                <CustomTextInput
                  name='address'
                  placeholder='Delivery Address'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className='w-full text-gray900 text-sm'
                  label='Delivery Address'
                />
              </div>
            )}
            <div className='flex items-center gap-4'>
              <button
                type='button'
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  shopFor === "someone" ? "border-yellow700" : "border-gray300"
                }`}
                onClick={() => setShopFor("someone")}
                aria-label='Send to someone'>
                {shopFor === "someone" && <span className='w-3 h-3 bg-yellow700 rounded-full block'></span>}
              </button>
              <span className='text-sm font-semibold text-soft300'>Send to someone</span>
            </div>
            {shopFor === "someone" && (
              <div className='pl-6 flex flex-col gap-4 mb-8'>
                <div className='flex gap-4'>
                  <CustomTextInput
                    name='someoneFirstName'
                    placeholder='First name'
                    value={someoneFirstName}
                    onChange={(e) => setSomeoneFirstName(e.target.value)}
                    className='w-full text-gray900 text-sm'
                    label='First name'
                  />
                  <CustomTextInput
                    name='someoneLastName'
                    placeholder='Last name'
                    value={someoneLastName}
                    onChange={(e) => setSomeoneLastName(e.target.value)}
                    className='w-full text-gray900 text-sm'
                    label='Last name'
                  />
                </div>
                <CustomTextInput
                  name='someoneAddress'
                  placeholder='Address'
                  value={someoneAddress}
                  onChange={(e) => setSomeoneAddress(e.target.value)}
                  className='w-full text-gray900 text-sm'
                  label='Address'
                />
                <div className='flex gap-4'>
                  <CustomSelectInput
                    name='someoneRegion'
                    label='Region/State'
                    options={regionOptions}
                    value={someoneRegion}
                    onChange={(e) => setSomeoneRegion(e.target.value)}
                    className='w-full text-gray900 text-sm'
                    placeholder='Select...'
                  />
                  <CustomSelectInput
                    name='someoneCity'
                    label='City'
                    options={cityOptions}
                    value={someoneCity}
                    onChange={(e) => setSomeoneCity(e.target.value)}
                    className='w-full text-gray900 text-sm'
                    placeholder='Select...'
                  />
                </div>
                <div className='flex gap-4'>
                  <CustomTextInput
                    name='someonePhone'
                    placeholder='Phone Number'
                    value={someonePhone}
                    onChange={(e) => setSomeonePhone(e.target.value)}
                    className='w-full text-gray900 text-sm'
                    label='Phone Number'
                  />
                  <CustomTextInput
                    name='someoneEmail'
                    placeholder='Email (optional)'
                    value={someoneEmail}
                    onChange={(e) => setSomeoneEmail(e.target.value)}
                    className='w-full text-gray900 text-sm'
                    label='Email (optional)'
                  />
                </div>
                <h3 className='text-lg font-bold my-4 text-gray900'>Additional Information</h3>
                <CustomTextArea
                  name='someoneNotes'
                  placeholder='Notes about your order, e.g. special notes for delivery'
                  value={someoneNotes}
                  onChange={(e) => setSomeoneNotes(e.target.value)}
                  className='w-full text-gray900 text-sm'
                  label='Notes (Optional)'
                  rows={3}
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
            {/* <div className='mb-4'>
              <label className='block text-sm mb-1 font-medium'>Voucher Code</label>
              <CustomTextInput
                name='voucher'
                placeholder='Enter Discount code'
                value={voucher}
                onChange={(e) => setVoucher(e.target.value)}
                className='w-full'
              />
            </div> */}
            <CustomButton
              bgColor={colors.textYellow}
              color={colors.textDark}
              className='w-full font-bold text-base py-3 mt-2 rounded-lg hover:opacity-90 transition-all'
              type='button'
              onClick={handleVoucherSubmit}>
              SUBMIT REQUEST →
            </CustomButton>
          </div>
          {/* Shop for self/send to someone */}
        </aside>
      </section>
    </section>
  );
};

export default CartInfo;
