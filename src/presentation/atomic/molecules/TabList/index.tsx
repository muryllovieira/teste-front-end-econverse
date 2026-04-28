import type { FC } from "react";
import styles from "./style.module.scss";

type TabListProps = {
  items: string[];
  activeItem: number;
  onTabClick: (index: number) => void;
};

export const TabList: FC<TabListProps> = ({
  items,
  activeItem,
  onTabClick,
}) => {
  return (
    <div className={styles.tab_list}>
      {items.map((tab, i) => (
        <button
          key={tab}
          className={`${styles.tab_item} ${activeItem === i ? styles.tab_item__active : ""}`}
          onClick={() => onTabClick(i)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
