/* eslint-disable no-unused-vars */
import styles from "./NavbarList.module.css";

interface NavListType {
  label: string;
  active: string | null;
  setActive: (label: string) => void;
}

const NavList = ({ label, active, setActive }: NavListType) => {
  return (
    <li
      className={`${styles.navItem} ${active === label ? styles.active : ""}`}
      onClick={() => setActive(label)}
    >
      {label}
      {active === label && <span className={styles.indicator}></span>}
    </li>
  );
};

export default NavList;

