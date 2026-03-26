import { useContext } from "react";
import ProductsContext from "../../context";
import Product from "../product";
import styles from "./styles.module.css";
function CartComponent() {
  const { cartData } = useContext(ProductsContext);
  const totalResult = cartData.reduce(
    (sum, item) => sum + Number(item.price),
    0,
  );
  return (
    <div className={styles.container}>
      {cartData.length === 0 ? (
        <p className={styles.empty}>Cart is empty!</p>
      ) : (
        <div>
          <h2 className={styles.title}>Cart</h2>
          <div className={styles.flex}>
            <div className={styles.list}>
              {cartData.map((pr) => {
                return <Product pr={pr} key={pr.id} />;
              })}
            </div>
            <div className={styles.total}>
              <h3 className={styles.totalTitle}>Total</h3>
              <div className={styles.totalList}>
                {cartData.map((prod) => {
                  return (
                    <p className={styles.name} key={prod.id}>
                      {prod.name}
                    </p>
                  );
                })}
              </div>
              <p className={styles.text}>
                Price: <br />
                <span className={styles.span}>
                  {totalResult.toLocaleString()} $
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default CartComponent;
