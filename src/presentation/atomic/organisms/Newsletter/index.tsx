import { Button } from "@/presentation/atomic/atoms/Button";
import { Checkbox } from "@/presentation/atomic/atoms/CheckBox";
import { TextInput } from "@/presentation/atomic/atoms/TextInput";
import { useState } from "react";
import styles from "./style.module.scss";

export const Newsletter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [terms, setTerms] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3>Inscreva-se na nossa newsletter</h3>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>

        <form className={styles.form}>
          <div className={styles.inputs}>
            <TextInput
              placeholder="Digite seu nome"
              value={name}
              onChange={setName}
            />
            <TextInput
              placeholder="Digite seu email"
              value={email}
              onChange={setEmail}
            />
            <Button value="Inscrever" variant="primary" />
          </div>

          <Checkbox
            id="termos"
            label="Aceito os termos e condições"
            checked={terms}
            onChange={setTerms}
          />
        </form>
      </div>
    </section>
  );
};
