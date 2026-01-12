"use client";

import { useProducts } from "@/src/models/product";
import Image from "next/image";

const Products = () => {
  const { data, isLoading, isError } = useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading products</div>;

  return (
    <div className="flex flex-col items-center justify-center py-10 gap-4">
      <h1 className="text-2xl font-bold">Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {data?.data?.map((product: any) => (
          <div
            key={product.id}
            className="flex flex-col items-center border p-4 rounded shadow"
          >
            <span className="mb-2 font-medium text-white">{product.name}</span>
            <Image
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
              className="object-cover rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
