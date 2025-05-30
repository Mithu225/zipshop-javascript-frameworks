"use client";
import Image from "next/image";

/**
 * Banner component displays the main promotional banner of the store
 * @returns {JSX.Element} A banner section with image, text, and call-to-action button
 */
const Banner = () => {
  /**
   * Scrolls to the products section when the "Shop Now" button is clicked
   */
  const handleShopNowClick = () => {
    const element = document.getElementById("products");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-200 w-full rounded-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-16">
            <Image
              src="/asset/banner.png"
              width={500}
              height={500}
              alt="Store Banner"
              className="h-96 w-auto object-cover rounded-lg"
            />
            <div className="space-y-4">
              <h3 className="text-2xl text-gray-700">Sale season</h3>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                Welcome to Zip Store
              </h1>
              <button
                onClick={handleShopNowClick}
                className="inline-block rounded-md bg-custom-button px-8 py-3 text-center font-medium text-white hover:bg-blue-950"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
