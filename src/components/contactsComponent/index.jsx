import styles from "./styles.module.css";
import snapchat from "../../assets/snapchat.svg";
import facebook from "../../assets/facebook.svg";
import xIcon from "../../assets/x_icon.jpeg.svg";
import Form from "../form";
const icons = [snapchat, facebook, xIcon];
function ConractsComponent() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Contacts</h2>
      <ul className={styles.list}>
        <li>8 800 000 00 00</li>
        <li>emailexample@email.com</li>
      </ul>
      <div className={styles.flex}>
        <div>
          <Form />
        </div>
        <div className={styles.find}>
          <h3 className={styles.iconTitle}>Find us:</h3>
          <ul className={styles.listIcons}>
            {icons.map((icon) => {
              return (
                <li key={icon}>
                  <img src={icon} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
export default ConractsComponent;
