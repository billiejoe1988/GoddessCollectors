import Link from "next/link"
import Image from "next/image"
import DeleteButton from "@/components/admin/Delete"

const Products = async () => {
    const items = await fetch(`http://${process.env.VERCEL_URL}/api/products/all`, {
        cache: 'no-store',
    }).then(r => r.json())

    return (
        <div className="bg-white p-4 rounded">
            <Link
                href={"Admin/create"}
                style={{ 
                    backgroundColor: '#FFA500', 
                    color: '#fff', 
                    borderRadius: '0.375rem', 
                    padding: '0.5rem 1rem', 
                    display: 'inline-block', 
                    marginBottom: '1rem' 
                }}
            >
                Add Product
            </Link>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-900">
                    <thead className="text-xs text-gray-700 uppercase bg-orange-200">
                        <tr>
                            <th scope="col" className="px-3 py-2 bg-orange-400">Name</th>
                            <th scope="col" className="px-3 py-2 bg-orange-400">Price</th>
                            <th scope="col" className="px-3 py-2 bg-orange-400">Stock</th>
                            <th scope="col" className="px-3 py-2 bg-orange-400">Type</th>
                            <th scope="col" className="px-3 py-2 bg-orange-400">Img</th>
                            <th scope="col" className="px-3 py-2 bg-orange-400">Slug</th>
                            <th scope="col" className="px-3 py-2 bg-orange-400">Description</th>
                            <th scope="col" className="px-3 py-2 bg-orange-400">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item) => (
                                <tr key={item.slug} className="border-b border-gray-200">
                                    <td className="p-2">{item.title}</td>
                                    <td className="p-2">{item.price}</td>
                                    <td className="p-2">{item.instock}</td>
                                    <td className="p-2">{item.type}</td>
                                    <td className="p-2">
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            width={80}
                                            height={80}
                                        />
                                    </td>
                                    <td className="p-2">{item.slug}</td>
                                    <td className="p-2 truncate max-w-prose">{item.description}</td>
                                    <td className="p-2">
                                        <Link
                                            href={`Admin/edit/${item.slug}`}
                                            style={{ 
                                                backgroundColor: '#FFA500', 
                                                color: '#fff', 
                                                borderRadius: '0.375rem', 
                                                padding: '0.5rem 1rem', 
                                                marginRight: '0.5rem' 
                                            }}
                                        >
                                            Edit
                                        </Link>

                                        <DeleteButton slug={item.slug} />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Products;
