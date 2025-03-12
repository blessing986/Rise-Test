/* eslint-disable no-unused-vars */
import styles from "./NavbarList.module.css";

interface NavListType {
  label: string;
  active: string | null;
  setActive: (label: string) => void;
}

const NavList = ({ label, active, setActive }: NavListType) => {
  const isActive = active === label;

  return (
    <li className={styles.navItem} role="none">
      <button
        className={`${styles.navButton} ${isActive ? styles.active : ""}`}
        onClick={() => setActive(label)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setActive(label);
          }
        }}
        aria-pressed={isActive}
        aria-label={`Navigate to ${label}`}
        tabIndex={0}>
        {label}
        {isActive && <span className={styles.indicator}></span>}
      </button>
    </li>
  );
};

export default NavList;
