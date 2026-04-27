import { type LucideIcon } from "lucide-react";
import type { FC } from "react";
import styles from "./style.module.scss";

type NavItemProps = {
  icon?: LucideIcon;
  text: string;
  highlight?: boolean;
};

export const NavItem: FC<NavItemProps> = ({
  icon: Icon,
  text,
  highlight = false,
}) => {
  return (
    <li
      className={`${styles.nav_item} ${highlight ? styles.nav_item__highlight : ""}`}
    >
      {Icon && <Icon className={styles.nav_item__icon} />}
      <a>{text}</a>
    </li>
  );
};
