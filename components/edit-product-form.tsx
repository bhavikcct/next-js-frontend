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

export const EditProductForm = ({ task }: { task: Product }) => {
  const router = useRouter();
  const form = useForm<EditProductFormValues>({
    resolver: zodResolver(editproductSchema),
    defaultValues: {
      description: task.description,
      price: task.price,
      name: task.name,
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
      queryKey: [API_ENDPOINTS.editproduct(String(task.id))],
      payload: data,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-center">Edit New Task</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Task Title"
                        {...field}
                        aria-invalid={
                          form.formState.errors.name ? "true" : "false"
                        }
                      />
                    </FormControl>
                    <FormDescription>Enter the task's title.</FormDescription>
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
                        placeholder="Task Description"
                        {...field}
                        aria-invalid={
                          form.formState.errors.description ? "true" : "false"
                        }
                      />
                    </FormControl>
                    <FormDescription>
                      Provide a brief description of the task.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Task Description"
                          {...field}
                          aria-invalid={
                            form.formState.errors.description ? "true" : "false"
                          }
                        />
                      </FormControl>
                      <FormDescription>
                        Provide a brief description of the task.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                type="submit"
                disabled={isPending}
                className="w-full cursor-pointer"
              >
                {isPending ? (
                  <Loader className="h-4 w-4 animate-spin" />
                ) : (
                  "Edit Task"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
