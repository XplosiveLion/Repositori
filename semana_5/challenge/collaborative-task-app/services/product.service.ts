import api from "@/lib/axios";

export async function getProducts() {
  try {
    const response = await api.get(
      "/catalog/product?page=1&items=5"
    );

    console.log(
      "PRODUCTS API:",
      response.data
    );

    return response.data;
  } catch (error) {
    console.error(
      "GET PRODUCTS ERROR:",
      error
    );

    return {
      data: [],
    };
  }
}

export async function getProductById(id: string) {
  try {
    const response = await api.get(
      `/catalog/product/${id}`
    );

    return response.data;
  } catch (error) {
    console.error(error);

    return null;
  }
}

export async function getCategories() {
  try {
    const response = await api.get(
      "/catalog/category"
    );

    return response.data;
  } catch (error) {
    console.error(error);

    return {
      data: [],
    };
  }
}