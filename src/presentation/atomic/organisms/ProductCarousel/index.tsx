import { IconButton } from "@/presentation/atomic/atoms/IconButton";
import { ProductCard } from "@/presentation/atomic/molecules/ProductCard";
import { TabList } from "@/presentation/atomic/molecules/TabList";
import { useRef, useState } from "react";
import styles from "./style.module.scss";

const tabs = [
  "CELULAR",
  "ACESSÓRIOS",
  "TABLETS",
  "NOTEBOOKS",
  "TVS",
  "VER TODOS",
];

const products = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  image: "src/assets/iphone.png",
  name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  originalPrice: 30.9,
  price: 28.9,
  installments: 2,
  installmentPrice: 49.95,
}));

export const ProductCarousel = () => {
  const [activeTab, setActiveTab] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!trackRef.current) return;

    const scrollAmount = trackRef.current.clientWidth;

    trackRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.carousel}>
      <h2 className={styles.carousel__title}>Produtos relacionados</h2>

      <TabList items={tabs} activeItem={activeTab} onTabClick={setActiveTab} />

      <div className={styles.carousel__wrapper}>
        <IconButton direction="left" onClick={() => scroll("left")} />

        <div className={styles.carousel__track} ref={trackRef}>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <IconButton direction="right" onClick={() => scroll("right")} />
      </div>
    </section>
  );
};
