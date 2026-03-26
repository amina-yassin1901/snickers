import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Snickers - store</h3>
        <nav className={styles.nav}>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#FFFFFF" : "#FFFFFF80",
            })}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#FFFFFF" : "#FFFFFF80",
            })}
            to="/cart"
          >
            Cart
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#FFFFFF" : "#FFFFFF80",
            })}
            to="/contacts"
          >
            Contacts
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
export default Header;
