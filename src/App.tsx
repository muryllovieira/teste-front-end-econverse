import { HeroBanner } from "@/presentation/atomic/molecules/HeroBanner";
import { BrandCarousel } from "@/presentation/atomic/organisms/BrandCarousel";
import { CategoryList } from "@/presentation/atomic/organisms/CategoryList";
import { Header } from "@/presentation/atomic/organisms/Header";

import { Footer } from "@/presentation/atomic/organisms/Footer";
import { PartnerList } from "@/presentation/atomic/organisms/PartnerList";
import { ProductCarousel } from "@/presentation/atomic/organisms/ProductCarousel";

function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <CategoryList />
      <ProductCarousel />
      <PartnerList />
      <BrandCarousel />
      <Footer />
    </>
  );
}

export default App;
