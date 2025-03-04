'use client';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CartContent() {
  const { items, removeFromCart, clearCart } = useCart();
  const router = useRouter();
  const total = items.reduce(
    (sum, item) => sum + item.product.discountedPrice * item.quantity,
    0
  );

  const handleCheckout = () => {
    const confirmed = window.confirm('Are you sure you want to checkout?');
    if (confirmed) {
      clearCart();
      router.push('/success');
    }
  };

  const handleBuyMore = () => {
    router.push('/');
  };

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="space-y-4 flex flex-col items-center">
          {items.map((item) => (
            <div key={item.product.id} className="flex items-center justify-between p-4 bg-white w-1/2 rounded-lg shadow">
              <div className="relative w-24 h-24">
                <Image 
                  src={item.product.image.url} 
                  alt={item.product.title}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="flex flex-row gap-8 p-4 items-center justify-center flex-1">
                <h3 className="font-semibold">{item.product.title}</h3>
                <p className="text-gray-600">x {item.quantity}</p>
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
          <div className="mt-6 text-right flex flex-col justify-end gap-4">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <div className="flex flex-row justify-end gap-4">
              <button 
                onClick={handleCheckout}
                className="p-2 bg-custom-button text-white py-2 rounded-md hover:bg-blue-950 transition-colors"
              >
                Check out
              </button>
              <button 
                onClick={handleBuyMore}
                className="p-2 bg-custom-button text-white py-2 rounded-md hover:bg-blue-950 transition-colors"
              >
                Buy more
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}