import React from "react";
import ProductDetail from "@/components/product/ProductDetail";

const DetailPage = ({ params }) => {
    const { slug } = params;

    return (
        <div className="container m-auto mt-10">
            <ProductDetail slug={slug} />
        </div>
    );
};

export default DetailPage ;
