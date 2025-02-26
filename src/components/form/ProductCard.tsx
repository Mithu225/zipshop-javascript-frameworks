"use client";
import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: {
    url: string;
    alt: string;
  };
}

export default function ProductCard({
  id,
  title,
  description,
  price,
  discountedPrice,
  image,
}: ProductProps) {
  return (
    <div className="w-full sm:w-[48%] md:w-[30%] bg-white rounded-lg shadow-md p-4">
      <Image
        src={image.url}
        alt={image.alt}
        className="w-full h-48 object-cover rounded-md"
      />

      <h2 className="text-xl font-semibold mt-4">{title}</h2>
      <p className="text-gray-600 text-sm mt-2">{description}</p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-bold text-red-600">
          ${discountedPrice.toFixed(2)}
        </span>
        {price !== discountedPrice && (
          <span className="text-gray-500 line-through">
            ${price.toFixed(2)}
          </span>
        )}
      </div>

      <Link
        href={`/product/${id}`}
        className="mt-4 block bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded-md"
      >
        View Product
      </Link>
    </div>
  );
}
