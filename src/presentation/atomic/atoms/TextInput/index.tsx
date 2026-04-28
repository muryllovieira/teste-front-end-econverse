import type { FC } from "react";
import styles from "./style.module.scss";

type TextInputProps = {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

export const TextInput: FC<TextInputProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      className={styles.text_input}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
