
export const revalidate = 60;

const getData = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 60 }
  })
  if(!res.ok) throw new Error ('failed to fetch the data');
  return res.json();
}

const page = async({ params }) => {
  const product = await getData(params.id);
  return (
    <div>
      <h1>{product.id}. {product.title}</h1>
      <p>{product.description}</p>
      <p>{product.availabilityStatus}</p>
    </div>
  )
}

export default page;