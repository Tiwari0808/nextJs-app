import Link from "next/link"

const page = () => {
    return (
        <div>
            {[...Array(10)].map((_, i) =>
                <div key={i}>
                    <Link href={`/products/${i + 1}`}>Product {i + 1}</Link>
                </div>
            )}

        </div>
    )
}

export default page;