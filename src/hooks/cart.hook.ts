import { useEffect, useState } from "react";

// Custom event for cart updates
export const CART_UPDATED_EVENT = "cartUpdated";

export const useCart = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    // Initial load
    const items = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setCartItems(items);

    // Listen for cart updates
    const handleCartUpdate = () => {
      const updatedItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
      setCartItems(updatedItems);
    }; 

    window.addEventListener(CART_UPDATED_EVENT, handleCartUpdate);

    return () => {
      window.removeEventListener(CART_UPDATED_EVENT, handleCartUpdate);
    };
  }, []);

  const addToCart = (item: any) => {
    const items = JSON.parse(localStorage.getItem("cartItems") || "[]");
    items.push(item);
    localStorage.setItem("cartItems", JSON.stringify(items));
    window.dispatchEvent(new Event(CART_UPDATED_EVENT));
  };

  const removeFromCart = (itemId: string) => {
    const items = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const updatedItems = items.filter((item: any) => item.id !== itemId);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    window.dispatchEvent(new Event(CART_UPDATED_EVENT));
  };

  const updateCartItemQuantity = (itemId: string, quantity: number) => {
    const items = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const updatedItems = items.map((item: any) => (item.id === itemId ? { ...item, quantity } : item));
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    window.dispatchEvent(new Event(CART_UPDATED_EVENT));
  };

  const resetCart = () => {
    localStorage.removeItem("cartItems");
    window.dispatchEvent(new Event(CART_UPDATED_EVENT));
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    resetCart,
  };
};
