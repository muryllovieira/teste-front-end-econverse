import { Search } from "lucide-react";
import { useState } from "react";
import styles from "./style.module.scss";

type SearchBarProps = {
  placeholder?: string;
  onSearch?: (value: string) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "O que você está buscando?",
  onSearch,
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onSearch?.(e.target.value);
  };

  const handleClear = () => {
    setValue("");
    onSearch?.("");
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={styles.searchBarInput}
      />
      <Search
        color="#bdbdbd"
        className={styles.searchIcon}
        onClick={handleClear}
      />
    </div>
  );
};
