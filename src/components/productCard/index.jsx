import styles from "./styles.module.css";
import { useContext } from "react";
import ProductsContext from "../../context";
function ProductCard({ pr }) {
  const { addToCart } = useContext(ProductsContext);
  return (
    <div className={styles.card}>
      <img className={styles.image} src={pr.image} alt={pr.name} />
      <h3 className={styles.title}>{pr.name}</h3>
      <div className={styles.bottom}>
        <p className={styles.price}>
          Price: <br /> <span className={styles.span}>{pr.price} $</span>
        </p>
        <button onClick={() => addToCart(pr)} className={styles.button}>
          &#43;
        </button>
      </div>
    </div>
  );
}
export default ProductCard;
