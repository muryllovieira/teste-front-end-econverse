import { ChevronLeft, ChevronRight } from "lucide-react";
import type { FC } from "react";
import styles from "./style.module.scss";

type IconButtonProps = {
  direction: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
};

export const IconButton: FC<IconButtonProps> = ({ direction, onClick }) => {
  return (
    <button className={styles.arrow} onClick={onClick} type="button">
      {direction === "left" ? <ChevronLeft /> : <ChevronRight />}
    </button>
  );
};
