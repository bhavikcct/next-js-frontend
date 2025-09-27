"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface SearchInputProps {
  initialSearch: string;
}

export default function SearchInput({ initialSearch }: SearchInputProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [value, setValue] = useState(initialSearch);

  useEffect(() => {
    const handler = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set("search", value);
      } else {
        params.delete("search");
      }
      router.push("?" + params.toString());
    }, 500);

    return () => clearTimeout(handler);
  }, [value, router, searchParams]);

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="border rounded-md px-3 py-2 w-64"
    />
  );
}
