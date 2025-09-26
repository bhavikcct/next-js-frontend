import { EditProductForm } from "@/components/edit-product-form";
import { getProductById } from "@/http/products";
import { headers } from "next/headers";

const EditProductPage = async ({ params }: { params: { id: string } }) => {
    const requestHeaders = await headers();
  
  const task = await getProductById(params.id,requestHeaders);

  if (!task) {
    return <div className="p-4 text-red-500">Task not found.</div>;
  }

  return (
    <>
      <div className="container mx-auto p-4">
        <EditProductForm task={task} />
      </div>
    </>
  );
};

export default EditProductPage;
