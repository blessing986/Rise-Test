import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import NavItem from "./NavItem/NavItem";
import menu from "../../assets/menu.png";
import close from "../../assets/close.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Desktop view */}
      <section className={styles.desktopView}>
        <div className={styles.desktopContainer}>
          <img src={logo} alt="logo" />
          <NavItem />
        </div>
      </section>

      {/* Mobile View */}
      <section className={styles.mobileView}>
        <img src={logo} alt="logo" />
        <button onClick={() => setIsOpen(!isOpen)}>
          <img src={isOpen ? close : menu} alt="menu" />
        </button>
      </section>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuTop}>
            <img src={logo} alt="logo" />
            <button onClick={() => setIsOpen(false)}>
              <img src={close} alt="close menu" className={styles.closeIcon} />
            </button>
          </div>
          <NavItem />
        </div>
      )}
    </header>
  );
};

export default Navbar;

