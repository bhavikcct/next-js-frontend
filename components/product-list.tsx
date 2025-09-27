import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { ProductListActions } from "./action";
import { Product } from "@/types/products.type";
import { Card, CardContent } from "@/components/ui/card";
import { PackageX } from "lucide-react";

export const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div className="m-4 sm:m-6 lg:m-8 p-4 sm:p-6 lg:p-8 bg-white border border-gray-200 rounded-xl shadow-lg">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Product List</h2>

      {products && products.length > 0 ? (
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-gray-100 text-gray-700">
              <TableHead className="px-6 py-3 text-left font-medium">
                Product Name
              </TableHead>
              <TableHead className="px-6 py-3 text-left font-medium">
                Description
              </TableHead>
              <TableHead className="px-6 py-3 text-left font-medium">
                Price ($)
              </TableHead>
              <TableHead className="px-6 py-3 text-left font-medium">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {products.map((product, idx) => (
              <TableRow
                key={product.id}
                className={`transition-all ease-in-out duration-300 ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-100`}
              >
                <TableCell className="px-6 py-4 font-semibold text-gray-800">
                  {product.productName}
                </TableCell>
                <TableCell className="px-6 py-4 text-gray-600">
                  {product.description}
                </TableCell>
                <TableCell className="px-6 py-4 text-gray-700">
                  ${product.price}
                </TableCell>
                <TableCell className="px-6 py-4 text-center">
                  <ProductListActions product={product} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Card className="flex items-center justify-center py-16 bg-gray-50 border border-dashed border-gray-300">
          <CardContent className="flex flex-col items-center text-center space-y-3">
            <PackageX className="w-10 h-10 text-gray-400" />
            <h3 className="text-base font-medium text-gray-700">
              No products found
            </h3>
            <p className="text-sm text-gray-500">
              Start by adding a new product using the button above.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
