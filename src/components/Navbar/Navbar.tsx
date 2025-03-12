import { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import NavItem from "./NavItem/NavItem";
import menu from "../../assets/menu.png";
import close from "../../assets/close.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024;

    if (isOpen || isDesktop) {
      document.body.classList.add("no-scroll");
      menuRef.current?.querySelector("button")?.focus();
    } else {
      document.body.classList.remove("no-scroll");
      if (isDesktop) {
        toggleButtonRef.current?.focus();
      }
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <header className={styles.header}>
      {/* Desktop View */}
      <section className={styles.desktopView}>
        <div className={styles.desktopContainer}>
          <img src={logo} alt="Company Logo" />
          <NavItem closeButtonRef={closeButtonRef} />
        </div>
      </section>

      {/* Mobile View */}
      <section className={styles.mobileView}>
        <img src={logo} alt="Company Logo" />
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          ref={toggleButtonRef}>
          <img src={isOpen ? close : menu} alt="menu" aria-hidden="true" />
        </button>
      </section>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={styles.mobileMenu} ref={menuRef}>
          <div className={styles.mobileMenuTop}>
            <img src={logo} alt="Company Logo" />
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className={styles.closeButton}
              ref={closeButtonRef}>
              <img
                src={close}
                alt="close menu"
                aria-hidden="true"
                className={styles.closeIcon}
              />
            </button>
          </div>
          <NavItem closeButtonRef={closeButtonRef} />
        </div>
      )}
    </header>
  );
};

export default Navbar;
