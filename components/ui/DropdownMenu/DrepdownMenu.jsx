import { useState } from "react";
import Link from "next/link";

const DropdownMenu = () => {
  const products = [
    { name: "Hi Talker", href: "/hitalker" },
    // { name: "Product 2", href: "/product2" },
    // { name: "Product 3", href: "/product3" },
  ];

  return (
    <div className="absolute bg-white mt-2 w-48 border rounded shadow-lg">
      <ul>
        {products.map((product, idx) => (
          <li key={idx} className="hover:bg-gray-200">
            <Link href={product.href} className="block px-4 py-2">
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
