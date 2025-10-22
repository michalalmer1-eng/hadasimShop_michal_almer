"use client";

import { useEffect, useState } from "react";
import Card from "@/app/components/Card/card";

interface Product {
  _id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  inv: { hifa: number; tlv: number; eilat: number };
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(console.error);
  }, []);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
        padding: "24px",
      }}
    >
      <section
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "1200px",
        }}
      >
        {products.map((p) => (
          <Card
            key={p._id}
            image={p.image}
            title={p.title}
            description={p.description}
            price={p.price}
            inv={p.inv}
          />
        ))}
      </section>
    </main>
  );
}
