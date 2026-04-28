import { FooterLinks } from "@/presentation/atomic/molecules/FooterLinks";
import { Newsletter } from "@/presentation/atomic/organisms/Newsletter";
import styles from "./style.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Newsletter />

      <FooterLinks />

      <div className={styles.footer__bottom}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
};
