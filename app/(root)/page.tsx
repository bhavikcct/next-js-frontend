import { ProductList } from "@/components/product-list";
import { Button } from "@/components/ui/button";
import { getAllProducts } from "@/http/products";
import { headers } from "next/headers";
import Link from "next/link";





export default async function Home() {
  const requestHeaders = await headers();
  const products = await getAllProducts(requestHeaders); 

  return (
    <div className="m-4 sm:m-6 lg:m-8 p-4 sm:p-6 lg:p-8   space-y-4">
      <div className="flex justify-end ">
        <Link href="/product/add">
          <Button>
            + Add Product
          </Button>
        </Link>
      </div>

      <ProductList tasks={products} />
    </div>

  );
}
