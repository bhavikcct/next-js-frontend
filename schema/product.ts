import { z } from "zod";

export const createproductSchema = z.object({
  productName:z.string().min(1, "name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.coerce.number().min(0, "Price must be at least 0"),
});

export  type CreateProductFormValues = z.infer<typeof createproductSchema>;



export const editproductSchema = z.object({
  productName:z.string().min(1, "name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.coerce.number().min(0, "Price must be at least 0"),

});

export  type EditProductFormValues = z.infer<typeof editproductSchema>;
