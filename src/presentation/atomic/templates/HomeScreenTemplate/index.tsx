import { HeroBanner } from "@/presentation/atomic/molecules/HeroBanner";
import { BrandCarousel } from "@/presentation/atomic/organisms/BrandCarousel";
import { CategoryList } from "@/presentation/atomic/organisms/CategoryList";
import { Footer } from "@/presentation/atomic/organisms/Footer";
import { Header } from "@/presentation/atomic/organisms/Header";
import { PartnerList } from "@/presentation/atomic/organisms/PartnerList";
import { ProductCarousel } from "@/presentation/atomic/organisms/ProductCarousel";

import type { FC } from "react";

export const HomeScreenTemplate: FC = () => {
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
};
