import { Header } from "@/components/header";
import { ProductCard } from "@/components/product/card";
import { ProductGrid } from "@/components/product/grid";
import { Product } from "@/types";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div>
      <Header />
      <h1 className="text-4xl text-center mt-8">Products</h1>
      <h1 className="text-4xl text-center mt-8">{currentPage}</h1>
      <Suspense key={currentPage} fallback={<div>Loading...</div>}>
        <ProductGrid query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
}
