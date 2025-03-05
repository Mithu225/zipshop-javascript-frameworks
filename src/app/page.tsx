'use client';
import Banner from "@/components/Banner";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center pb-20 gap-8 font-[family-name:var(--font-geist-sans)]">
  <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">

        <Banner />
        <div id="products" className="w-full py-8">
          <ProductList />
        </div>
      </main>
    </div>
  );
}
