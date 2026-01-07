"use client";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.map((p: any) => (
        <p key={p._id}>{p.name} - ₹{p.price}</p>
      ))}
    </div>
  );
}
