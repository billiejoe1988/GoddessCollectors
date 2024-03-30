import React from "react"; 
import ProductDetail from "@/components/product/ProductDetail";

interface Props {
    slug: string; 
}

const SculptureDetail: React.FC<Props> = ({ slug }) => {
    return (
        <div>
            <ProductDetail slug={slug} />
        </div>
    );
};

export default SculptureDetail;
