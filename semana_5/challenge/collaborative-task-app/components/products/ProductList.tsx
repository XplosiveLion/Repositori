import ProductCard from "./ProductCard";

import {
  getProducts,
} from "@/services/product.service";

function normalizeProducts(
  response: any
) {
  if (Array.isArray(response)) {
    return response;
  }

  if (Array.isArray(response?.data)) {
    return response.data;
  }

  if (Array.isArray(response?.results)) {
    return response.results;
  }

  if (Array.isArray(response?.items)) {
    return response.items;
  }

  return [];
}

export default async function ProductList() {
  const response =
    await getProducts();

  const products =
    normalizeProducts(response);

  const activeProducts =
    products.filter(
      (product: any) =>
        product.is_active !== false
    );

  if (activeProducts.length === 0) {
    return (
      <div
        className="
          bg-white
          rounded-3xl
          shadow-md
          border
          border-gray-100
          p-8
          text-center
          text-gray-500
        "
      >
        No hay productos para mostrar.
      </div>
    );
  }

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
      "
    >
      {activeProducts.map(
        (product: any) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        )
      )}
    </div>
  );
}