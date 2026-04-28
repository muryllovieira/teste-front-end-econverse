import logo from "@/assets/logo.png";
import { SearchBar } from "@/presentation/atomic/atoms/SearchBar";
import { TextIcon } from "@/presentation/atomic/atoms/TextIcon";
import {
  CircleUserRound,
  CreditCard,
  Crown,
  Heart,
  PackageCheck,
  ShieldCheck,
  ShoppingCart,
  Truck,
} from "lucide-react";
import { NavItem } from "../../atoms/NavItem";
import styles from "./style.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__benefits}>
        <TextIcon
          icon={ShieldCheck}
          text="Compra"
          highlight="100% segura"
          position="after"
        />
        <TextIcon
          icon={Truck}
          text="acima de R$ 200"
          highlight="Frete grátis"
          position="before"
        />
        <TextIcon
          icon={CreditCard}
          text="suas compras"
          highlight="Parcele"
          position="before"
        />
      </div>

      <div className={styles.header__main}>
        <a href="/" className={styles.header__logo}>
          <img src={logo} alt="Econverse" />
        </a>

        <SearchBar />

        <nav className={styles.header__actions}>
          <button className={styles.header__action} aria-label="Meus pedidos">
            <PackageCheck />
          </button>
          <button className={styles.header__action} aria-label="Favoritos">
            <Heart />
          </button>
          <button className={styles.header__action} aria-label="Minha conta">
            <CircleUserRound />
          </button>
          <button className={styles.header__action} aria-label="Carrinho">
            <ShoppingCart />
          </button>
        </nav>
      </div>

      <nav className={styles.header__nav}>
        <ul className={styles.header__navList}>
          <NavItem text="TODAS CATEGORIAS" />
          <NavItem text="SUPERMERCADO" />
          <NavItem text="LIVROS" />
          <NavItem text="MODA" />
          <NavItem text="LANÇAMENTOS" />
          <NavItem text="OFERTAS DO DIA" highlight={true} />
          <NavItem text="ASSINATURA" icon={Crown} />
        </ul>
      </nav>
    </header>
  );
};
