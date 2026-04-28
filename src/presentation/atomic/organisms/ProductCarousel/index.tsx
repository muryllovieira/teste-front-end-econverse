import { useProduct } from "@/data/Product";
import { IconButton } from "@/presentation/atomic/atoms/IconButton";
import { ProductCard } from "@/presentation/atomic/molecules/ProductCard";
import { TabList } from "@/presentation/atomic/molecules/TabList";
import { ProductModal } from "@/presentation/atomic/organisms/ProductModal";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

const tabs = [
  "CELULAR",
  "ACESSÓRIOS",
  "TABLETS",
  "NOTEBOOKS",
  "TVS",
  "VER TODOS",
];

export const ProductCarousel = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const { products, getProducts, getProductRequestStatus } = useProduct();

  const totalItems = products.length;
  const itemsPerPage = 4;
  const maxIndex = Math.max(0, totalItems - itemsPerPage);

  useEffect(() => {
    getProducts();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const translateX = -(currentIndex * (100 / itemsPerPage));

  return (
    <section className={styles.carousel}>
      <div className={styles.carousel__content}>
        <div className={styles.carousel__divider}></div>
        <h2 className={styles.carousel__title}>Produtos relacionados</h2>
        <div className={styles.carousel__divider}></div>
      </div>

      <TabList items={tabs} activeItem={activeTab} onTabClick={setActiveTab} />

      <div className={styles.carousel__wrapper}>
        <IconButton direction="left" onClick={handlePrev} />

        <div className={styles.carousel__window}>
          {" "}
          <div
            className={styles.carousel__track}
            style={{ transform: `translateX(${translateX}%)` }}
          >
            {getProductRequestStatus.status === "pending" && (
              <p>Carregando...</p>
            )}

            {products.map((product, index) => (
              <div className={styles.carousel__item} key={index}>
                <ProductCard
                  image={product.photo}
                  name={product.productName}
                  description={product.descriptionShort}
                  price={product.price}
                  originalPrice={product.price * 1.1}
                  installments={10}
                  installmentPrice={product.price / 10}
                  onClick={() => setSelectedProduct(product)}
                />
              </div>
            ))}
          </div>
        </div>

        <IconButton direction="right" onClick={handleNext} />
      </div>
      {selectedProduct && (
        <ProductModal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          image={selectedProduct.photo}
          name={selectedProduct.productName}
          price={selectedProduct.price}
          description={selectedProduct.descriptionShort}
        />
      )}
    </section>
  );
};
