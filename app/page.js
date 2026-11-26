import WhyChooseUs from "./components/home-components/WhyChooseUs";
import Testimonials from "./components/home-components/Testimonials";
import HeroSection from "./components/home-components/HeroSection";
import CategorySection from "./components/home-components/CategorySection";
import TrendingProducts from "./components/home-components/TrendingProducts";
import BestSeller from "./components/home-components/BestSeller";
import NewArrivals from "./components/home-components/NewArrivals";
import DealSection from "./components/home-components/DealsSection";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <TrendingProducts />
      <BestSeller/>
      <NewArrivals />
      <DealSection />
      <Testimonials />
      <WhyChooseUs />
    </div>
  );
}
