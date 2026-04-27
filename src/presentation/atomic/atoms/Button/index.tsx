import type { FC } from "react";
import styles from "./style.module.scss";

type ButtonProps = {
  value: string;
};

export const Button: FC<ButtonProps> = ({ value }) => {
  return (
    <>
      <button className={styles.buttonProduct}>{value}</button>
    </>
  );
};
