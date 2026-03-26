import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
import styles from "./styles.module.css";

function Layout() {
  return (
    <div className={styles.container}>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
export default Layout;
