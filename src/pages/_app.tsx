import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CartProvider } from "@/context/CartContext";

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Header />
      <div className="flex flex-grow w-full bg-white items-center justify-center">
        <main className="container flex-col mt-6 px-4">
          <Component {...pageProps} />
        </main>
      </div>
      <Footer />
    </CartProvider>
  );
}
