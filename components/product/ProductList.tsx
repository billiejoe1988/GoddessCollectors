import React from "react";
import CardSimple from "../product/CardSimple";

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

const ProductList: React.FC<ProductListProps> = async ({ type }) => {
    const items = await fetch(`http://localhost:3000/api/products/${type}`, {
        cache: 'no-cache',
    }).then(r => r.json());

    return (
        <section className="container m-auto flex justify-center items-center gap-8 flex-wrap">
            {items.map((item: Product) => (
                <CardSimple key={item.slug} item={item} />
            ))}
         </section>
    )
};

export default ProductList;