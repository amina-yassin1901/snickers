import banner from "../../assets/Banner.png";
import styles from "./styles.module.css";
function Banner() {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={banner} />
    </div>
  );
}
export default Banner;
