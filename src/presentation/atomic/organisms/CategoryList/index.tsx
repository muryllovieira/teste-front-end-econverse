import esportesIcon from "@/assets/svg/corrida.svg";
import saudeIcon from "@/assets/svg/cuidados-de-saude.svg";
import ferramentasIcon from "@/assets/svg/ferramentas.svg";
import techIcon from "@/assets/svg/image.svg";
import modaIcon from "@/assets/svg/moda.svg";
import mercadoIcon from "@/assets/svg/supermercados.svg";
import bebidasIcon from "@/assets/svg/whiskey.svg";
import { CategoryItem } from "@/presentation/atomic/molecules/CategoryItem";
import {} from "lucide-react";
import { useState } from "react";
import styles from "./style.module.scss";

const categories = [
  { id: 1, label: "Tecnologia", icon: techIcon },
  { id: 2, label: "Supermercado", icon: mercadoIcon },
  { id: 3, label: "Bebidas", icon: bebidasIcon },
  { id: 4, label: "Ferramentas", icon: ferramentasIcon },
  { id: 5, label: "Saúde", icon: saudeIcon },
  { id: 6, label: "Esportes e Fitness", icon: esportesIcon },
  { id: 7, label: "Moda", icon: modaIcon },
];

export const CategoryList = () => {
  const [active, setActive] = useState(1);

  return (
    <div className={styles.category_list}>
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          icon={category.icon}
          label={category.label}
          active={active === category.id}
          onClick={() => setActive(category.id)}
        />
      ))}
    </div>
  );
};
