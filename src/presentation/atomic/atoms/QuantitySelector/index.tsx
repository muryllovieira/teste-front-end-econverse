import type { FC } from "react";
import { useState } from "react";
import styles from "./style.module.scss";

type QuantitySelectorProps = {
  min?: number;
  max?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
};

export const QuantitySelector: FC<QuantitySelectorProps> = ({
  min = 1,
  max = 99,
  defaultValue = 1,
  onChange,
}) => {
  const [quantity, setQuantity] = useState(defaultValue);

  const update = (next: number) => {
    if (next < min || next > max) return;
    setQuantity(next);
    onChange?.(next);
  };

  return (
    <div className={styles.quantity}>
      <button
        className={styles.quantity__btn}
        onClick={() => update(quantity - 1)}
        type="button"
        aria-label="Diminuir quantidade"
      >
        −
      </button>
      <span className={styles.quantity__value}>
        {String(quantity).padStart(2, "0")}
      </span>
      <button
        className={styles.quantity__btn}
        onClick={() => update(quantity + 1)}
        type="button"
        aria-label="Aumentar quantidade"
      >
        +
      </button>
    </div>
  );
};
