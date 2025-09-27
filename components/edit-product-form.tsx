"use client";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Loader } from "lucide-react";
import { Button } from "./ui/button";
import { EditProductFormValues, editproductSchema } from "@/schema/product";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { API_ENDPOINTS } from "@/lib/api-endpoint";
import { useRouter } from "next/navigation";
import { editProduct } from "@/http/products";
import { Product } from "@/types/products.type";

export const EditProductForm = ({ product }: { product: Product }) => {
  const router = useRouter();
  const form = useForm<EditProductFormValues>({
    resolver: zodResolver(editproductSchema),
    defaultValues: {
      description: product?.description,
      price: product?.price,
      productName: product?.productName,
    },
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: editProduct,
    onSuccess: () => {
      form.reset();
      router.push("/");
    },
  });

  const onSubmit = async (data: EditProductFormValues) => {
    await mutateAsync({
      queryKey: [API_ENDPOINTS.editproduct(String(product.id))],
      payload: data,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-center">Edit Product</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="productName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Product Name"
                        {...field}
                        aria-invalid={
                          form.formState.errors.productName ? "true" : "false"
                        }
                      />
                    </FormControl>
                    <FormDescription>Enter the product name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Product Description"
                        {...field}
                        aria-invalid={
                          form.formState.errors.description ? "true" : "false"
                        }
                      />
                    </FormControl>
                    <FormDescription>
                      Provide a brief description of the product.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Product Price"
                        {...field}
                        aria-invalid={
                          form.formState.errors.price ? "true" : "false"
                        }
                      />
                    </FormControl>
                    <FormDescription>
                      Enter the price of the product.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isPending}
                className="w-full cursor-pointer"
              >
                {isPending ? (
                  <Loader className="h-4 w-4 animate-spin" />
                ) : (
                  "Edit Product"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
