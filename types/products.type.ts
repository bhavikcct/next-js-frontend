export interface ApiResponse<T> {
  message: string;
  data: T;
}

export interface Product {
  id: number;
  description: string;
  productName: string;
  price: number;
}
