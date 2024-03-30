import { bd } from "../data/bd";
import CardSimple from "../CardSimple";

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
    const items: Product[] = type === 'all' ? bd : bd.filter(item => item.type === type);

    return (
        <section className="container -auto flex justify-center items-center gap-12 flex-wrap">
            {items.map(item => (
                <CardSimple
                    key={item.slug}
                    imageUrl={item.img}
                    altText={item.title}
                    description={item.description}
                    buttonText="View Details"
                    buttonLink={`/pages/${item.type}/${item.slug}`}
                />
            ))}
        </section>
    );
};

export default ProductList;
