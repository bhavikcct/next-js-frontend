import { EditProductForm } from "@/components/edit-product-form";
import { getProductById } from "@/http/products";
import { headers } from "next/headers";

const EditProductPage = async ({ params }: { params:Promise<{ id: string }> }) => {
  const { id } = await params;
    const requestHeaders = await headers();
  
  const product = await getProductById(id,requestHeaders);
  console.log(product,"product");

  if (!product) {
    return <div className="p-4 text-red-500">Product not found.</div>;
  }

  return (
    <>
      <div className="container mx-auto p-4">
        <EditProductForm product={product} />
      </div>
    </>
  );
};

export default EditProductPage;
