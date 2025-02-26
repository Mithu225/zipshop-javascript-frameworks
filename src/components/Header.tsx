// src/app/components/Header.tsx
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

import Image from "next/image";
import SearchBar from "./SearchBar";

export default function Header() {
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
            <li>
              <Link
                href="/product"
                className="hover:text-custom-button transition"
              >
                Product
              </Link>
            </li>
          </ul>
        </nav>
      <SearchBar />
        <ShoppingCart fill="white" className="hover:text-custom-button" />
      </div>
    </header>
  );
}
