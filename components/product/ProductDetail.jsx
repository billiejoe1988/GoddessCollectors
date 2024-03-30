import React from "react";
import Image from "next/image";
import { data } from "@/data/db";
import QtySelector from "./QtySelector";

const ProductDetail = ({ slug }) => {

    const item = data.find(p => p.slug === slug)

    return (
        <div className="max-w-4xl m-auto">
            <section className="flex gap-6">
                <div className="relative w-1/2">
                    <Image
                        src={item.img}
                        alt={item.title}
                        width={1000}
                        height={1000}
                    />
                </div>
                <div className="w-1/2">
                    <h2 className="text-2xl font-semibold border-b border-gray-200 pb-4 mb-4">{item.title}</h2>
                    <p className="text-4xl">$ {item.price}</p>
                    <QtySelector item={item} />
                </div>
            </section>
            <section>
                <h3 className="text-xl font-semibold border-b border-gray-200 pb-4 my-4">Descripción</h3>
                <p className="text-gray-600">{item.description}</p>
            </section>
        </div>
    );
};

export default ProductDetail;
