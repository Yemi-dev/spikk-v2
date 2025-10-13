import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MdCheckCircle, MdLocalShipping, MdHome, MdPhone, MdEmail, MdCancel } from "react-icons/md";
import { FaBox, FaClock } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { sampleSuccessResponse, formatPrice } from "@/utils/index";
import CustomButton from "@/ui/atoms/CustomButton";
import { toast } from "react-toastify";
import usePageLoader from "@/hooks/usePageLoader";

interface OrderStatus {
  level: string;
  date: string;
  _id: string;
}

interface OrderItem {
  name: string;
  price: number;
  image: string;
  type: string;
  quantity: number;
  isSpecial: boolean;
  order: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

interface OrderData {
  reference: string;
  status: OrderStatus[];
  pikker_order_items: OrderItem[];
  drop_off_address: string;
  contact_no: string;
  user_email: string;
  total_amount: number;
  delivery_fee: number;
  delivery_code: string;
  note: string;
  payment_type: string;
  paid: boolean;
  scheduled: boolean;
  scheduled_time: string | null;
  createdAt: string;
}

const Track = () => {
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const { setLoading } = usePageLoader();
  useEffect(() => {
    // Check if order data exists in localStorage (from successful order submission)
    const storedOrder = localStorage.getItem("currentOrder");
    if (storedOrder) {
      try {
        const parsedOrder = JSON.parse(storedOrder);
        setOrderData(parsedOrder as OrderData);
      } catch (error) {
        console.error("Error parsing stored order:", error);
        // Fall back to sample data
        setOrderData(sampleSuccessResponse as OrderData);
      }
    } else {
      // Fall back to sample data for testing
      toast.error("No order data found");
    }
  }, []);

  if (!orderData) {
    return (
      <div className='flex justify-center items-center min-h-[400px]'>
        <div className='animate-pulse text-gray600'>Loading order details...</div>
      </div>
    );
  }

  // Check if order is canceled
  const isCanceled = orderData.status.some((s) => s.level === "canceled");
  const isDelivered = orderData.status.some((s) => s.level === "delivered");

  // Normal order flow steps (excluding canceled)
  const normalOrderSteps = [
    { key: "placed", label: "Order Placed", icon: FaBox },
    { key: "accepted", label: "Confirmed", icon: IoMdCheckmarkCircle },
    { key: "starting_pickup", label: "Picked Up", icon: MdLocalShipping },
    { key: "arrived_pickup", label: "In Transit", icon: MdLocalShipping },
    { key: "completed_purchase", label: "Completed Purchase", icon: MdHome },
    { key: "delivered", label: "Delivered", icon: MdCheckCircle },
  ];

  // If canceled, only show canceled step
  const orderStatusSteps = isCanceled
    ? [{ key: "canceled", label: "Order Canceled", icon: MdCancel }]
    : normalOrderSteps;

  const currentStatusIndex = orderStatusSteps.findIndex(
    (step) => step.key === orderData.status[orderData.status.length - 1]?.level
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const total = orderData.total_amount + orderData.delivery_fee;

  return (
    <div className='w-full'>
      {/* Success/Status Header */}
      <div className='flex justify-between items-start gap-4 sm:flex-col'>
        <div
          className={`flex-1 bg-gradient-to-r rounded-2xl p-6 sm:p-8 mb-8 border animate-fadeIn sm:w-full ${
            isCanceled ? "from-red/5 to-red/50 border-red" : "from-green/5 to-green/50 border-green"
          }`}>
          <div className='flex sm:flex-col items-center sm:items-start gap-4'>
            <div className={`rounded-full p-3 sm:p-2 animate-bounce-once ${isCanceled ? "bg-error" : "bg-green"}`}>
              {isCanceled ? (
                <MdCancel className='text-white text-4xl sm:text-3xl' />
              ) : (
                <MdCheckCircle className='text-white text-4xl sm:text-3xl' />
              )}
            </div>
            <div className='flex-1'>
              <h1 className='text-2xl sm:text-xl font-bold text-gray900 mb-2'>
                {isCanceled ? "Order Canceled" : "Order Placed Successfully!"}
              </h1>
              <p className='text-gray700 text-sm sm:text-xs mb-3'>
                {isCanceled
                  ? "This order has been canceled. If you have any questions, please contact our support team."
                  : "Thank you for your order. We&apos;ve received it and will process it shortly."}
              </p>
              <div className='flex sm:flex-col items-center sm:items-start gap-4'>
                <div className='bg-white rounded-lg px-4 py-2 border border-green-200'>
                  <span className='text-xs text-gray600'>Order Reference</span>
                  <p className='font-bold text-gray900 text-sm'>{orderData.reference}</p>
                </div>
                <div className='bg-white rounded-lg px-4 py-2 border border-green-200'>
                  <span className='text-xs text-gray600'>Delivery Code</span>
                  <p className='font-bold text-yellow700 text-lg'>{orderData.delivery_code}</p>
                </div>
              </div>
              <div className='mt-4 bg-white border border-natural300 rounded-lg p-3'>
                <p className='text-xs text-black font-medium'>
                  💡 <span className='font-semibold'>Tip:</span> Share this delivery code with your rider upon arrival
                  to confirm your order.
                </p>
              </div>
              {orderData.scheduled && orderData.scheduled_time && (
                <div className='mt-2 bg-yellow700/10 border border-yellow700 rounded-lg p-3'>
                  <p className='text-xs text-yellow700'>
                    📅 <span className='font-semibold'>Scheduled Delivery:</span> {formatDate(orderData.scheduled_time)}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Order Status Timeline */}
        <div className='min-w-[300px] sm:min-w-full bg-white rounded-2xl border border-soft200 shadow-sm p-6 sm:p-4 mb-6'>
          <h2 className='text-xl sm:text-lg font-bold text-gray900 mb-6'>Order Status</h2>
          <div className='relative'>
            {/* Progress Line */}
            <div className='absolute left-6 sm:left-4 top-8 bottom-8 w-0.5 bg-gray200'></div>
            <div
              className={`absolute left-6 sm:left-4 top-8 w-0.5 transition-all duration-500 ${
                isCanceled ? "bg-error" : isDelivered ? "bg-green" : "bg-yellow700"
              }`}
              style={{
                height: isDelivered ? "90%" : `${(currentStatusIndex / (orderStatusSteps.length - 0.5)) * 100}%`,
              }}></div>

            {/* Status Steps */}
            <div className='space-y-6'>
              {orderStatusSteps.map((step, index) => {
                const isCompleted = index <= currentStatusIndex;
                const isCurrent = index === currentStatusIndex;
                const statusInfo = orderData.status.find((s) => s.level === step.key);
                const Icon = step.icon;
                const isCanceledStep = step.key === "canceled";

                return (
                  <div key={step.key} className='flex items-start gap-4 relative'>
                    <div
                      className={`relative z-10 flex items-center justify-center w-12 h-12 sm:w-10 sm:h-10 rounded-full border-2 transition-all ${
                        isCanceledStep
                          ? "bg-error border-error"
                          : isCompleted
                          ? isDelivered
                            ? "bg-green border-green"
                            : "bg-yellow700 border-yellow700"
                          : isCurrent
                          ? "bg-white border-yellow700"
                          : "bg-white border-gray300"
                      }`}>
                      <Icon
                        className={`text-xl sm:text-lg ${
                          isCanceledStep
                            ? "text-white"
                            : isCompleted
                            ? "text-white"
                            : isCurrent
                            ? "text-yellow700"
                            : "text-gray400"
                        }`}
                      />
                    </div>
                    <div className='flex-1 pt-2'>
                      <h3
                        className={`font-semibold text-sm sm:text-xs ${
                          isCanceledStep
                            ? "text-error"
                            : isDelivered || isCompleted || isCurrent
                            ? "text-gray900"
                            : "text-gray400"
                        }`}>
                        {step.label}
                      </h3>
                      {statusInfo && (
                        <p className='text-xs text-gray600 mt-1 flex items-center gap-1'>
                          <FaClock className='text-[10px]' />
                          {formatDate(statusInfo.date)}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Layout for Order Items and Summary */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* Order Items */}
        <div className='lg:col-span-2 bg-white rounded-2xl border border-soft200 shadow-sm p-6 sm:p-4'>
          <h2 className='text-xl sm:text-lg font-bold text-gray900 mb-4'>Order Items</h2>
          <div className='space-y-4'>
            {orderData.pikker_order_items.map((item) => (
              <div
                key={item.id}
                className='flex sm:flex-col items-center sm:items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray200'>
                <Image
                  src={item.image || "/images/png/demo-poster.png"}
                  alt={item.name}
                  width={80}
                  height={80}
                  className='object-contain rounded-lg bg-white'
                />
                <div className='flex-1'>
                  <h3 className='font-semibold text-gray900 text-sm mb-1'>{item.name}</h3>
                  <p className='text-xs text-gray600 mb-2'>Quantity: {item.quantity}</p>
                  <p className='font-bold text-gray900'>{formatPrice(item?.price * item.quantity)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary & Details */}
        <div className='space-y-6'>
          {/* Order Summary */}
          <div className='bg-white rounded-2xl border border-soft200 shadow-sm p-6 sm:p-4'>
            <h2 className='text-lg font-bold text-gray900 mb-4'>Order Summary</h2>
            <div className='space-y-3'>
              <div className='flex justify-between text-sm'>
                <span className='text-gray600'>Subtotal</span>
                <span className='font-semibold text-gray900'>{formatPrice(orderData.total_amount)}</span>
              </div>
              <div className='flex justify-between text-sm'>
                <span className='text-gray600'>Delivery Fee</span>
                <span className='font-semibold text-gray900'>{formatPrice(orderData.delivery_fee)}</span>
              </div>
              <div className='border-t border-gray200 pt-3 flex justify-between'>
                <span className='font-bold text-gray900'>Total</span>
                <span className='font-bold text-gray900 text-lg'>{formatPrice(total)}</span>
              </div>
              <div className='mt-4 p-3 bg-yellow700/5 rounded-lg border border-yellow700'>
                <p className='text-xs text-gray700'>
                  <span className='font-semibold'>Payment Type:</span>{" "}
                  {orderData.payment_type === "post-paid" ? "Pay on Delivery" : "Prepaid"}
                </p>
                <p className='text-xs text-gray700 mt-1'>
                  <span className='font-semibold'>Status:</span>{" "}
                  <span
                    className={`${
                      isCanceled ? "text-error" : orderData.paid ? "text-green" : "text-spikkOrange"
                    } font-semibold`}>
                    {orderData.paid ? "Paid" : "Pending Payment"}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Delivery Details */}
          <div className='bg-white rounded-2xl border border-soft200 shadow-sm p-6 sm:p-4'>
            <h2 className='text-lg font-bold text-gray900 mb-4'>Delivery Details</h2>
            <div className='space-y-3'>
              <div className='flex items-start gap-3'>
                <MdHome className='text-gray600 text-xl mt-0.5' />
                <div className='flex-1'>
                  <p className='text-xs text-gray600 mb-1'>Delivery Address</p>
                  <p className='text-sm text-gray900 font-medium'>{orderData.drop_off_address}</p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <MdPhone className='text-gray600 text-xl mt-0.5' />
                <div className='flex-1'>
                  <p className='text-xs text-gray600 mb-1'>Contact Number</p>
                  <p className='text-sm text-gray900 font-medium'>{orderData.contact_no}</p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <MdEmail className='text-gray600 text-xl mt-0.5' />
                <div className='flex-1'>
                  <p className='text-xs text-gray600 mb-1'>Email</p>
                  <p className='text-sm text-gray900 font-medium'>{orderData.user_email}</p>
                </div>
              </div>
              {orderData.note && (
                <div className='mt-4 p-3 bg-blue-blue100/10 rounded-lg border border-blue100'>
                  <p className='text-xs text-gray600 mb-1'>Order Notes</p>
                  <p className='text-sm text-gray900'>{orderData.note}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className='mt-8 flex sm:flex-col gap-4 justify-center'>
        <CustomButton
          className='bg-yellow700 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all'
          onClick={() => {
            setLoading(true);
            window.location.href = "/marketplace";
          }}>
          Continue Shopping
        </CustomButton>
        <CustomButton
          className='bg-white text-red border-2 border-red hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-all'
          onClick={() => {
            localStorage.removeItem("currentOrder");
            setLoading(true);
            window.location.href = "/home";
          }}>
          Remove
        </CustomButton>
      </div>
    </div>
  );
};

export default Track;
