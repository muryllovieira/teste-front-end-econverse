import { type LucideIcon } from "lucide-react";
import type { FC } from "react";
import styles from "./style.module.scss";

type TextIconProps = {
  icon?: LucideIcon;
  text: string;
  highlight?: string;
  position?: "before" | "after";
};

export const TextIcon: FC<TextIconProps> = ({
  icon: Icon,
  text,
  highlight,
  position = "after",
}) => {
  return (
    <span className={styles.text_icon}>
      {Icon && <Icon />}
      {highlight ? (
        position === "before" ? (
          <>
            <strong>{highlight}</strong> {text}
          </>
        ) : (
          <>
            {text} <strong>{highlight}</strong>
          </>
        )
      ) : (
        text
      )}
    </span>
  );
};
