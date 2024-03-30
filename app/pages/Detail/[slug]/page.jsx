import React from "react";
import ProductDetail from "@/components/product/ProductDetail";

const Detail = ({ params }) => {
    const { slug } = params;

    return (
        <div className="container m-auto mt-20">
            <ProductDetail slug={slug} />
        </div>
    );
};

export default Detail;
