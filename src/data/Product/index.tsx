import type { Product } from "@/@types/Product";
import { requestStatus, type RequestStatus } from "@/@types/Request";
import { api } from "@/service/axios";
import { createContext, useContext, useState, type ReactNode } from "react";

interface ProductProviderProps {
  children: ReactNode;
}

interface ProductContextProps {
  products: Product[];
  getProducts: () => Promise<void>;
  getProductRequestStatus: RequestStatus;
}

const ProductContext = createContext<ProductContextProps>(
  {} as ProductContextProps,
);

export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [getProductRequestStatus, setGetProductRequestStatus] =
    useState(requestStatus);

  const getProducts = async () => {
    setGetProductRequestStatus({ status: "pending" });
    try {
      const { data } = await api.get<{ products: Product[] }>(
        `/lista-produtos/produtos.json`,
      );
      setProducts(data.products);
      setGetProductRequestStatus({ status: "succeeded" });
    } catch (error) {
      setGetProductRequestStatus({ status: "failed" });
    }
  };

  return (
    <ProductContext.Provider
      value={{ products, getProducts, getProductRequestStatus }}
    >
      {children}
    </ProductContext.Provider>
  );
};
