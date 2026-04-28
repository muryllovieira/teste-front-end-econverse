import type { FC } from "react";
import styles from "./style.module.scss";

type CheckboxProps = {
  id: string;
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

export const Checkbox: FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
}) => {
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
