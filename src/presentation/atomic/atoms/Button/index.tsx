import classNames from "classnames";
import type { FC } from "react";
import styles from "./style.module.scss";

type ButtonProps = {
  value: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({
  value,
  variant = "primary",
  onClick,
}) => {
  const buttonClasses = classNames(styles.button, {
    [styles["button--primary"]]: variant === "primary",
    [styles["button--secondary"]]: variant === "secondary",
  });

  return (
    <>
      <button className={buttonClasses} onClick={onClick} type="button">
        {value}
      </button>
    </>
  );
};
