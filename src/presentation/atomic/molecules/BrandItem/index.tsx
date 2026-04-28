import type { FC } from "react";
import styles from "./style.module.scss";

type BrandItemProps = {
  image: string;
  alt: string;
};

export const BrandItem: FC<BrandItemProps> = ({ image, alt }) => {
  return (
    <div className={styles.brand_item}>
      <img src={image} alt={alt} />
    </div>
  );
};
