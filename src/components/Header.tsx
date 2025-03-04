"use client";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

import Image from "next/image";
import SearchBar from "./SearchBar";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { cartCount } = useCart();
  return (
    <header className="bg-custom-teal text-white shadow-md">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 p-4 sm:flex-row">
        <div className="p-0">
          <Image
            src="/asset/ziplogo.png"
            alt="ZipShop Logo"
            height={160}
            width={100}
          />
        </div>

        <nav>
          <ul className="flex flex-col sm:flex-row font-bold gap-4">
            <li>
              <Link href="/" className="hover:text-custom-button  transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-custom-button transition"
              >
                Contact
              </Link>
            </li>
           
          </ul>
        </nav>
      <SearchBar />
      <li className="relative list-none">
              <Link href="/cart" className="hover:text-gray-300">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              </Link>
            </li>
      </div>
    </header>
  );
}
