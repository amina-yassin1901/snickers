import styles from "./styles.module.css";
import Banner from "../banner";
import { useContext } from "react";
import ProductsContext from "../../context/index";
import ProductCard from "../productCard";

function Main() {
  const { products } = useContext(ProductsContext);
  return (
    <main className={styles.main}>
      <Banner />
      <h2 className={styles.title}>Goods</h2>
      <div className={styles.container}>
        {products.map((pr) => {
          return <ProductCard key={pr.id} pr={pr} />;
        })}
      </div>
    </main>
  );
}
export default Main;
