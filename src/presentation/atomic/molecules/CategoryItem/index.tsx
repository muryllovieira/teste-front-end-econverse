import type { FC } from "react";
import styles from "./style.module.scss";

type CategoryItemProps = {
  icon: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

export const CategoryItem: FC<CategoryItemProps> = ({
  icon,
  label,
  active = false,
  onClick,
}) => {
  return (
    <button
      className={`${styles.category_item} ${active ? styles.category_item__active : ""}`}
      onClick={onClick}
    >
      <div className={styles.category_item__icon}>
        <img src={icon} alt={label} />
      </div>
      <span className={styles.category_item__label}>{label}</span>
    </button>
  );
};
