import banner from "@/assets/banner-blackfriday.png";
import { Button } from "@/presentation/atomic/atoms/Button";
import styles from "./style.module.scss";

export const HeroBanner: React.FC = () => {
  return (
    <section className={styles.hero}>
      <img loading="lazy" src={banner} alt="Promoções" />
      <div className={styles.content}>
        <div className={styles.container}>
          <h2>Venha conhecer nossas promoções</h2>
          <h3>
            <span>50% Off</span> nos produtos{" "}
          </h3>
          <Button value="Ver Produto" variant="primary" />
        </div>
      </div>
    </section>
  );
};
