import { Product } from "@/types";
import { ProductCard } from "./card";

export async function ProductGrid({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const products = await getProducts({ query, currentPage });

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

async function getProducts({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const res = await fetch(
    `http://localhost:6969/api/products?query=${query}&page=${currentPage}`
  );

  if (!res.ok) {
    throw new Error("Failed to get products");
  }

  return res.json();
}
