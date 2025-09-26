import { ProductList } from "@/components/product-list";
import { Button } from "@/components/ui/button";
import { getAllProducts } from "@/http/products";
import { headers } from "next/headers";
import Link from "next/link";

async function Home() {
  const headersInstance = await headers();
  const products = await getAllProducts(headersInstance);

  return (
    <div className="m-4 sm:m-6 lg:m-8 p-4 sm:p-6 lg:p-8   space-y-4">
      <div className="flex justify-end ">
        <Link href="/product/add">
          <Button>+ Add Product</Button>
        </Link>
      </div>

      <ProductList tasks={products} />
    </div>
  );
  
}

export default Home;
