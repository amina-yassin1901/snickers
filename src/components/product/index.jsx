import styles from "./styles.module.css";
import deletesvg from "../../assets/delete.svg";
import { useContext } from "react";
import ProductsContext from "../../context";
function Product({ pr }) {
  const { deleteFromCart } = useContext(ProductsContext);
  return (
    <div className={styles.card}>
      <img className={styles.image} src={pr.image} alt={pr.name} />
      <h3 className={styles.title}>{pr.name}</h3>

      <p className={styles.price}>
        Price: <br /> <span className={styles.span}>{pr.price} $</span>
      </p>
      <button onClick={() => deleteFromCart(pr.id)} className={styles.button}>
        <img src={deletesvg} />
      </button>
    </div>
  );
}
export default Product;
