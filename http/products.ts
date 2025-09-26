import { api } from "@/lib/api";
import { API_ENDPOINTS } from "@/lib/api-endpoint";
import { BASE_URL } from "@/lib/baseurl";
import {
  CreateProductFormValues,
  EditProductFormValues,
} from "@/schema/product";
import { Product } from "@/types/products.type";
import axios from "axios";
import { toast } from "sonner";

export async function getAllProducts(
  requestHeaders: Headers
): Promise<Product[]> {
  try {
    const cookie = requestHeaders.get("cookie") || "";

    console.log(cookie, "cookie");

    const apiWithCookies = axios.create({
      baseURL: BASE_URL.NEXT_PUBLIC_API_URI,
      headers: {
        cookie,
      },
    });
    // console.log(apiWithCookies, "apiWithCookies");

    const response = await apiWithCookies.get<Product[]>(
      API_ENDPOINTS.getallproducts
    );
    return response.data;
  } catch (error: any) {
    console.log(error, "error");
    console.error("Failed to fetch products:", error.message);
    return [];
  }
}

export const createProduct = async ({
  queryKey,
  payload,
}: {
  queryKey: string[];
  payload: CreateProductFormValues;
}): Promise<Product> => {
  try {
    const [API_ENDPOINT] = queryKey;
    const response = await api.post<Product>(API_ENDPOINT, payload);
    toast.success("Product Created");
    return response.data;
  } catch (error: any) {
    const message =
      error?.response?.data?.message || "Failed to create product.";
    toast.error(message);
    throw new Error(message);
  }
};

export const editProduct = async ({
  queryKey,
  payload,
}: {
  queryKey: string[];
  payload: EditProductFormValues;
}): Promise<Product> => {
  try {
    const [API_ENDPOINT] = queryKey;
    const response = await api.put<Product>(API_ENDPOINT, payload);
    toast.success("Product Edited Successfully");
    return response.data;
  } catch (error: any) {
    const message = error?.response?.data?.message || "Failed to edit product.";
    toast.error(message);
    throw new Error(message);
  }
};

export const deleteProduct = async ({
  queryKey,
}: {
  queryKey: string[];
}): Promise<void> => {
  try {
    const [API_ENDPOINT] = queryKey;
    await api.delete<void>(API_ENDPOINT);
    toast.success("Product Deleted Successfully");
  } catch (error: any) {
    const message =
      error?.response?.data?.message || "Failed to delete product.";
    toast.error(message);
    throw new Error(message);
  }
};

export async function getProductById(
  id: string,
  requestHeaders: Headers

): Promise<Product | null> {
  try {
    const cookie = requestHeaders.get("cookie") || "";

    const apiWithCookies = axios.create({
      baseURL: BASE_URL.NEXT_PUBLIC_API_URI,
      headers: {
        cookie,
      },
    });

    const response = await apiWithCookies.get<Product>(
      API_ENDPOINTS.getproductbyid(id)
    );
    return response.data;
  } catch (error: any) {
    console.error("Failed to fetch product by ID:", error.message);
    return null;
  }
}
