"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "./ui/input";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  interface Product {
    id: number;
    title: string;
    
  }

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://v2.api.noroff.dev/online-shop");
        const result = await response.json();

         

        if (result?.data) {
          setProducts(result.data); 
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-1/3 max-w-lg">
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for products..."
        className="w-full pl-10 pr-3 py-2 border border-white rounded-md bg-transparent text-white placeholder:text-white focus:outline-none focus:ring-0 focus:border-white"
      />
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-white"
        size={20}
      />

      {query && (
        <div className="absolute top-full mt-2 w-full bg-gray-800 text-white rounded-md shadow-lg p-2">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="p-2 border-b border-gray-600">
                {product.title}
              </div>
            ))
          ) : (
            <p className="p-2">No products found</p>
          )}
        </div>
      )}
    </div>
  );
}
