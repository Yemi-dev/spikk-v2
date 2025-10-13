export const formatPrice = (price: number) => {
  return price.toLocaleString("en-NG", { style: "currency", currency: "NGN" });
};

export const sampleSuccessResponse = {
  order_items: ["68ed157e69a5e6ae9b65b6dd", "68ed157e69a5e6ae9b65b6de", "68ed157e69a5e6ae9b65b6df"],
  note: "Nothing",
  pick_up_coordinates: {
    coordinates: [],
  },
  drop_off_address: "No 3, Adedoyin Street, Somolu, Lagos",
  drop_off_coordinates: {
    type: "Point",
    coordinates: [3.3463165, 6.635910099999999],
  },
  contact_no: "07060920000",
  status: [
    {
      level: "canceled",
      date: "2025-10-13T15:06:38.359Z",
      _id: "68ed157e69a5e6ae9b65b6db",
    },
  ],
  paid: false,
  type: "shop",
  payment_type: "post-paid",
  total_amount: 82500,
  spikker: null,
  user_email: "oxtoukachan@gmail.com",
  reference: "SPK|20251013030638",
  scheduled: false,
  scheduled_time: null,
  is_suspended: false,
  rating: 0,
  pikker_order_items: [
    {
      name: "Azul 15000 Puffs (High-Capacity Disposable Vape)",
      price: 23100,
      image: "https://res.cloudinary.com/dpz3rs8ay/image/upload/v1741704667/IMG-1232_aoiwll.jpg",
      type: "marketplace",
      quantity: 1,
      isSpecial: false,
      order: "68ed157e69a5e6ae9b65b6da",
      createdAt: "2025-10-13T15:06:38.523Z",
      updatedAt: "2025-10-13T15:06:38.523Z",
      id: "68ed157e69a5e6ae9b65b6dd",
    },
    {
      name: "Banga Red Palm Oil 2kg",
      price: 7800,
      image: "https://res.cloudinary.com/dpz3rs8ay/image/upload/v1728143672/spikk/Frame_121-123_fyjtuw.png",
      type: "marketplace",
      quantity: 3,
      isSpecial: false,
      order: "68ed157e69a5e6ae9b65b6da",
      createdAt: "2025-10-13T15:06:38.523Z",
      updatedAt: "2025-10-13T15:06:38.523Z",
      id: "68ed157e69a5e6ae9b65b6de",
    },
    {
      name: "Devon's King Vegetable Oil Big",
      price: 18000,
      image:
        "https://res.cloudinary.com/dpz3rs8ay/image/upload/v1746070460/Devon%27s%20King%20Vegetable%20Oil%20Big.jpg",
      type: "marketplace",
      quantity: 2,
      isSpecial: false,
      order: "68ed157e69a5e6ae9b65b6da",
      createdAt: "2025-10-13T15:06:38.523Z",
      updatedAt: "2025-10-13T15:06:38.523Z",
      id: "68ed157e69a5e6ae9b65b6df",
    },
  ],
  delivery_fee: 1650,
  delivery_code: "5372",
  createdAt: "2025-10-13T15:06:38.370Z",
  updatedAt: "2025-10-13T15:06:39.341Z",
  id: "68ed157e69a5e6ae9b65b6da",
};
