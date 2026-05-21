import { ProductShowcase } from "../landing/sections/ProductShowcase"
import Collection from "./sections/Collection"
import HeroSection from "./sections/HeroSection"

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <Collection/>
        <ProductShowcase/>
    </div>
  )
}

export default Home