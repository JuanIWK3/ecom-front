import { Product } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="min-w-48 w-full max-w-96" key={product.id}>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <figure className="flex items-center justify-center p-4">
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={300}
          />
        </figure>
        <CardDescription>{product.image}</CardDescription>
        <p>R${product.price}</p>
      </CardContent>
      <CardFooter>
        <Button>Add to cart</Button>
      </CardFooter>
    </Card>
  );
}
