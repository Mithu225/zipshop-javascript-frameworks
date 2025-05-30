import { CartProvider } from "@/context/CartContext";
import Header from "./Header";
import Footer from "./Footer";

/**
 * Layout component provides the main structure for all pages
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be rendered within the layout
 * @returns {JSX.Element} A layout structure with header, main content area, and footer
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-grow w-full bg-white items-center justify-center">
          <main className="container flex-col mt-6 px-4">{children}</main>
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
}
