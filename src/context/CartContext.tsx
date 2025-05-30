"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/types/product";

/**
 * Represents an item in the shopping cart
 */
type CartItem = {
  product: Product;
  quantity: number;
};

/**
 * Context type for the shopping cart
 * @typedef {Object} CartContextType
 * @property {CartItem[]} items - Array of items in the cart
 * @property {function(Product): void} addToCart - Function to add a product to cart
 * @property {function(string): void} removeFromCart - Function to remove a product from cart
 * @property {function(): void} clearCart - Function to clear all items from cart
 * @property {number} cartCount - Total number of items in cart
 */
type CartContextType = {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  cartCount: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

/**
 * Provider component for the shopping cart context
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element} CartProvider component
 */
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        return currentItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...currentItems, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.product.id !== productId)
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const cartCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, cartCount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

/**
 * Custom hook to access the cart context
 * @returns {CartContextType} The cart context
 * @throws {Error} If used outside of CartProvider
 */
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
