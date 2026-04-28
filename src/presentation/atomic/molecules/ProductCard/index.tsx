import { Button } from "@/presentation/atomic/atoms/Button";
import { ProductModal } from "@/presentation/atomic/organisms/ProductModal";
import { useState, type FC } from "react";
import styles from "./style.module.scss";

type ProductCardProps = {
  image: string;
  name: string;
  originalPrice: number;
  price: number;
  installments: number;
  installmentPrice: number;
};

export const ProductCard: FC<ProductCardProps> = ({
  image,
  name,
  originalPrice,
  price,
  installments,
  installmentPrice,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatPrice = (value: number) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__image}>
          <img src={image} alt={name} loading="lazy" />
        </div>
        <div className={styles.card__body}>
          <p className={styles.card__name}>{name}</p>
          <span className={styles.card__original}>
            {formatPrice(originalPrice)}
          </span>
          <strong className={styles.card__price}>{formatPrice(price)}</strong>
          <span className={styles.card__installments}>
            ou {installments}x de {formatPrice(installmentPrice)} sem juros
          </span>
          <span className={styles.card__shipping}>Frete grátis</span>
          <Button
            value="COMPRAR"
            variant="secondary"
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        image={image}
        name={name}
        price={price}
        onBuy={(qty) => console.log("Comprar", qty)}
      />
    </>
  );
};
