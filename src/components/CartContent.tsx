'use client';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export default function CartContent() {
  const { items, removeFromCart } = useCart();

  const total = items.reduce((sum, item) => 
    sum + (item.product.discountedPrice * item.quantity), 0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.product.id} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow">
              <div className="relative w-24 h-24">
                <Image 
                  src={item.product.image.url} 
                  alt={item.product.title}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{item.product.title}</h3>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <p className="font-semibold">${item.product.discountedPrice}</p>
              </div>
              <button 
                onClick={() => removeFromCart(item.product.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-6 text-right">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
}