import api from "../api/axios";

export interface Product {
  id: number;
  name: string;
  sku: string | null;
  description?: string | null;
  is_active: boolean;
  is_archived?: boolean;
  type: number;
  display_on_store: boolean;
  display_on_pos: boolean;
  average_rating: string;
  rating_count: number;
  user: number;
  category: {
    id: number;
    name: string;
  } | number | null;
  main_model?: any;
}



export async function getProducts() {
  const response = await api.get(
    "/catalog/product?page=1&items=5"
  );

  return response.data;
}

export async function getCategories() {
  const response = await api.get(
    "/catalog/category"
  );

  return response.data;
}

export async function createProduct(
  product: any
) {
  const response = await api.post(
    "/catalog/product",
    product
  );

  return response.data;
}

export async function updateProduct(
  product: any
) {
  const response = await api.put(
    `/catalog/product/${product.id}`,
    product
  );

  return response.data;
}

export async function softDeleteProduct(
  product: Product
) {
  const payload = {
    id: product.id,
    name: product.name,
    sku: product.sku,
    description: product.description || "",
    average_rating: product.average_rating || "0.00",
    rating_count: product.rating_count || 0,
    is_active: false,
    is_archived: product.is_archived || false,
    type: product.type || 1,
    preparation_time: 0,
    is_preparation_time: false,
    main_model:
      typeof product.main_model === "object"
        ? product.main_model?.id
        : product.main_model || null,
    display_on_store: product.display_on_store,
    display_on_pos: product.display_on_pos,
    outstanding: false,
    show_in_gallery: false,
    key_prod_serv: "",
    key_unit: "",
    unit: "",
    iva_rate: "0",
    ieps_rate: "0",
    user: product.user || 1,
    category:
      typeof product.category === "object"
        ? product.category?.id
        : product.category,
  };

  const response = await api.put(
    `/catalog/product/${product.id}`,
    payload
  );

  return response.data;
}