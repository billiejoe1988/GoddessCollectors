import React from "react";
import CardSimple from "../product/CardSimple";
import { data } from "@/data/db";

interface Product {
  title: string;
  description: string;
  instock: number;
  price: number;
  slug: string;
  img: string;
  type: string;
}

interface ProductListProps {
  type: string;
}

const ProductList: React.FC<ProductListProps> = ({ type }) => {
  const items = type === 'all' ? data : data.filter((item) => item.type === type);

  return (
    <section className="container m-auto flex justify-center items-center gap-8 flex-wrap">
      {items.map((item) => (
        <CardSimple key={item.slug} item={item} />
      ))}
    </section>
  );
}

export default ProductList;
