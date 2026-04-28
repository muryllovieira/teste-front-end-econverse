import logo from "@/assets/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import styles from "./style.module.scss";

const links: Record<string, string[]> = {
  Institucional: ["Sobre Nós", "Movimento", "Trabalhe conosco"],
  Ajuda: ["Suporte", "Fale Conosco", "Perguntas Frequentes"],
  Termos: [
    "Termos e Condições",
    "Política de Privacidade",
    "Troca e Devolução",
  ],
};

export const FooterLinks = () => {
  return (
    <div className={styles.footer_links}>
      <div className={styles.footer_links__brand}>
        <a href="/">
          <img src={logo} alt="Econverse" />
        </a>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className={styles.footer_links__socials}>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className={styles.footer_links__nav}>
        {Object.entries(links).map(([category, items]) => (
          <div key={category} className={styles.footer_links__group}>
            <h4>{category}</h4>
            <ul>
              {items.map((item) => (
                <li key={item}>
                  <a>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
