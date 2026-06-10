"use client";

import Header from "./sections/Header";
import ProductsSection from "./sections/ProductsSection";

function Shop() {
  return (
    <main className="min-h-screen text-white">
      <div className="mx-auto max-w-[1600px] px-4 py-6 lg:px-8">
        <Header />
        <ProductsSection />
      </div>
    </main>
  );
}

export default Shop;