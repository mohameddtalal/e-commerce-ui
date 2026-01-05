import ProductList from "@/components/ProductList"
import Image from "next/image"
const Homepage = () => {
  return (
    <div className=''>
      <div className="relative aspect-[3/1] mb-12"/**height 3 times width it's a ratio */>
        <Image src="/featured.png" alt="Brand Product" fill />
      </div>
      <ProductList/>
    </div>
  )
}

export default Homepage