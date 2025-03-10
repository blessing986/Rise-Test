import { useState } from "react";
import NavList from "../NavbarList/NavList";
import styles from "./NavItem.module.css";

const NavItem = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navList}>
        <NavList label="Why Rise" active={active} setActive={setActive} />
        <NavList label="Blog" active={active} setActive={setActive} />
        <NavList
          label="Rise for Business"
          active={active}
          setActive={setActive}
        />
      </ul>

      <div className={styles.buttonContainer}>
        <button className={styles.loginButton}>Log In</button>
        <button className={styles.getStartedButton}>Get started</button>
      </div>
    </nav>
  );
};

export default NavItem;
