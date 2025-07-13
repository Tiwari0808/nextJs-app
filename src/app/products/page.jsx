import Link from "next/link"

export const revalidate = 60;
const getProducts = async () => {
    const res = await fetch('https://dummyjson.com/products', {
        next: { revalidate: 60 }
    });
    const data = await res.json();
    return data.products;
}

const page = async() => {
    const products = await getProducts();
    return (
        <div>
            {products.map((product) =>
                <div key={product.id}>
                    <Link href={`/products/${product.id}`}>{product.id}. {product.title}</Link>
                </div>
            )}
        </div>
    )
}

export default page;