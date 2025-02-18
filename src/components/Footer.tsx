import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="flex items-center justify-center bg-custom-teal text-white
     flex-col"
    >
      <div className="p-0">
        <Image
          src="/asset/ziplogo.png"
          alt="ZipShop Logo"
          height={100}
          width={100}
        />
      </div>

      <p className="text-center text-sm mb-4 mt-0">
        © 2025 All rights reserved.
      </p>
    </footer>
  );
}
