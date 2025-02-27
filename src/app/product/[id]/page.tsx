import Image from 'next/image';
import { Product } from '@/types/product';

export default async function ProductPage({ params }: { params: { id: string } }) {
  try {
    const response = await fetch(`https://v2.api.noroff.dev/online-shop/${params.id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch product: ${response.statusText}`);
    }
    const data = await response.json();
    const product: Product = data.data;

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
           
            <div className="relative h-[500px]">
              <Image
                src={product.image.url}
                alt={product.image.alt}
                fill
                className="object-cover rounded-lg"
              />
            </div>

           
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold text-gray-900">${product.discountedPrice}</span>
                {product.discountedPrice < product.price && (
                  <span className="text-lg text-gray-500 line-through">${product.price}</span>
                )}
              </div>

              <div className="flex items-center mb-4">
                {'★'.repeat(product.rating)}{'☆'.repeat(5-product.rating)}
                <span className="ml-2 text-gray-600">({product.rating} out of 5)</span>
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              <div className="flex gap-4 mt-auto">
                <button className="flex-1 bg-custom-button text-white py-3 px-6 rounded-md hover:bg-blue-950 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
            {product.reviews.length > 0 ? (
              <div className="space-y-4">
                {product.reviews.map((review) => (
                  <div key={review.id} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">{review.username}</span>
                      <div className="flex items-center">
                        {'★'.repeat(review.rating)}{'☆'.repeat(5-review.rating)}
                      </div>
                    </div>
                    <p className="text-gray-600">{review.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No reviews yet.</p>
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to load product details';
    return <div className="text-center text-red-500 py-8">{errorMessage}</div>;
  }
}