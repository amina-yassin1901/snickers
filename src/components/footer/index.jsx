import styles from "./styles.module.css";
import face from "../../assets/face.svg";
import twit from "../../assets/twit.svg";
import inlin from "../../assets/in.svg";
const icons = [face, twit, inlin];
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.iconsContainer}>
          <h2 className={styles.title}> Contacts</h2>
          <ul className={styles.iconList}>
            {icons.map((icon) => {
              return <img key={icon} src={icon} />;
            })}
          </ul>
        </div>
        <div className={styles.contactsContainer}>
          <p>8 800 000 00 00</p>
          <p>emailexample@email.com</p>
        </div>
        <div className={styles.lastContainer}>
          <p>2026 Sneaker Shop. All rights reserved.</p>
          <input className={styles.input} type="text" placeholder="Email" />
        </div>
      </div>
    </footer>
  );
}
export default Footer;
