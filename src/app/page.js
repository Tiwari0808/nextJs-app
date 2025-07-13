import Link from "next/link"

const page = () => {
  return (
    <div>
      <h1>Welcome to Products Store</h1>
      <Link href={'/blog'}>blog</Link>
      <Link href={'/blog/js'}>js</Link>
      <Link href={'/blog/dsa'}>dsa</Link>

    </div>
  )
}

export default page
