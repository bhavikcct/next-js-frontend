import { ProductList } from "@/components/product-list";
import SearchInput from "@/components/search-input";
import { Button } from "@/components/ui/button";
import { getAllProducts } from "@/http/products";
import { headers } from "next/headers";
import Link from "next/link";

export default async function Home({
  searchParams,
}: {
  searchParams?: { search?: string };
}) {
  const headersInstance = await headers();
  const search = searchParams?.search || "";
  const products = await getAllProducts(headersInstance, search);

  return (
    <div className="m-4 sm:m-6 lg:m-8 p-4 sm:p-6 lg:p-8 space-y-4">
      <div className="flex justify-end items-center space-x-2">
        <SearchInput initialSearch={search} />
        <Link href="/product/add">
          <Button>+ Add Product</Button>
        </Link>
      </div>

      <ProductList products={products} />
    </div>
  );
}
