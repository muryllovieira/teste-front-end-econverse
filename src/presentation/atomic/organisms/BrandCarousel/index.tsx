import logoEconverse from "@/assets/logo.png";
import { BrandItem } from "@/presentation/atomic/molecules/BrandItem";
import styles from "./style.module.scss";

const brands = [
  { id: 1, name: "Econverse", image: logoEconverse },
  { id: 2, name: "Econverse", image: logoEconverse },
  { id: 3, name: "Econverse", image: logoEconverse },
  { id: 4, name: "Econverse", image: logoEconverse },
  { id: 5, name: "Econverse", image: logoEconverse },
];

export const BrandCarousel = () => {
  return (
    <section className={styles.brands}>
      <h2 className={styles.brands__title}>Navegue por marcas</h2>

      <div className={styles.brands__list}>
        {brands.map((brand) => (
          <BrandItem key={brand.id} image={brand.image} alt={brand.name} />
        ))}
      </div>
    </section>
  );
};
