import React from "react";
import Image from "next/image";
import QtySelector from "./QtySelector";

const ProductDetail = async ({ slug }) => {
    const item = await fetch(`http://localhost:3000/api/product/${slug}`, {
        cache: 'no-store',
        next:{
            revalidate: 0
        }

    }).then(res => res.json());

    return (
        <div className="max-w-4xl m-auto bg-white bg-opacity-75 rounded-lg p-8">
            <section className="flex gap-4">
                <div className="relative w-1/2">
                    <Image
                        src={item.img}
                        alt={item.title}
                        width={800}
                        height={800}
                        className="rounded-lg"
                    />
                </div>
                <div className="w-1/2 flex flex-col justify-between">
                    <div>
                        <h2 className="text-4xl font-bold border-b border-gray-200 pb-4 my-5 mx-5 py-5">{item.title}</h2>
                        <p className="text-gray-600 mt-5 mx-5">{item.description}</p>
                        <p className="text-4xl my-5 font-bold mt-3 mx-5">$ {item.price}</p>
                        <p className="text-gray-600 font-semibold mx-5">Type: {item.type}</p>
                        <div className="rounded-lg item-center mt-10 mx-5">
                            <QtySelector item={item} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetail;


