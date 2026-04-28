import { Button } from "@/presentation/atomic/atoms/Button";
import { QuantitySelector } from "@/presentation/atomic/atoms/QuantitySelector";
import { X } from "lucide-react";
import type { FC } from "react";
import styles from "./style.module.scss";

type ProductModalProps = {
  image: string;
  name: string;
  price: number;
  description?: string;
  detailsUrl?: string;
  isOpen: boolean;
  onClose: () => void;
  onBuy?: (quantity: number) => void;
};

export const ProductModal: FC<ProductModalProps> = ({
  image,
  name,
  price,
  description,
  detailsUrl,
  isOpen,
  onClose,
  onBuy,
}) => {
  if (!isOpen) return null;

  let quantity = 1;

  const formatPrice = (value: number) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={name}
      >
        <button
          className={styles.modal__close}
          onClick={onClose}
          aria-label="Fechar"
          type="button"
        >
          <X size={20} />
        </button>

        <div className={styles.modal__image}>
          <img src={image} alt={name} />
        </div>

        <div className={styles.modal__content}>
          <h2 className={styles.modal__name}>{name.toUpperCase()}</h2>
          <strong className={styles.modal__price}>{formatPrice(price)}</strong>

          {description && (
            <p className={styles.modal__description}>{description}</p>
          )}

          {detailsUrl && (
            <a href={detailsUrl} className={styles.modal__link}>
              Veja mais detalhes do produto &gt;
            </a>
          )}

          <div className={styles.modal__actions}>
            <QuantitySelector
              onChange={(v) => {
                quantity = v;
              }}
            />
            <Button
              value="COMPRAR"
              variant="primary"
              onClick={() => onBuy?.(quantity)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
