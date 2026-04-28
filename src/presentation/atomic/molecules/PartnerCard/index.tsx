import { Button } from "@/presentation/atomic/atoms/Button";
import styles from "./style.module.scss";

type PartnerCardProps = {
  image: string;
  title: string;
  description: string;
};

export const PartnerCard: React.FC<PartnerCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className={styles.advertisement_card}>
      <img loading="lazy" src={image} alt={title} />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Button value="CONFIRA" variant="primary" />
      </div>
    </div>
  );
};
