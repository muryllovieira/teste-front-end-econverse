import partner from "@/assets/partner.png";
import { PartnerCard } from "@/presentation/atomic/molecules/PartnerCard";
import styles from "./style.module.scss";

export const PartnerList: React.FC = () => {
  return (
    <section className={styles.partner_list}>
      <PartnerCard
        image={partner}
        description="Lorem ipsum dolor sit amet, consectetur"
        title="Parceiros"
      />
      <PartnerCard
        image={partner}
        description="Lorem ipsum dolor sit amet, consectetur"
        title="Parceiros"
      />
    </section>
  );
};
