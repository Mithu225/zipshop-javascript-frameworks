

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* <Image
          src="/asset/zipshop-logo.png"
          alt="ZipShop Logo"
          height={40}
          width={40}
        /> */}

        <h1 className="text-4xl font-bold text-center sm:text-left">
          Welcome to ZipShop
        </h1>

        <p className="text-center sm:text-left">
          Your one-stop shop for all things ZipShop.
        </p>
      </main>
    </div>
  );
}
