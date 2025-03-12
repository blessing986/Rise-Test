import { useState, useRef, useEffect } from "react";
import NavList from "../NavbarList/NavList";
import styles from "./NavItem.module.css";

const NavItem = ({
  closeButtonRef,
}: {
  closeButtonRef: React.RefObject<HTMLButtonElement>;
}) => {
  const [active, setActive] = useState<string | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [tabPressed, setTabPressed] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        setTabPressed(true);
        setTimeout(() => {
          setFocusedIndex(0); 
        }, 0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (navRef.current && tabPressed && focusedIndex !== null) {
      const focusableElements = [
        ...navRef.current.querySelectorAll<HTMLElement>("a, button"),
        closeButtonRef.current,
      ].filter(Boolean) as HTMLElement[];

      if (focusableElements[focusedIndex]) {
        focusableElements[focusedIndex].focus();
      }
    }
  }, [focusedIndex, closeButtonRef, tabPressed]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (navRef.current) {
      const focusableElements = [
        ...navRef.current.querySelectorAll<HTMLElement>("a, button"),
        closeButtonRef.current,
      ].filter(Boolean) as HTMLElement[];

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocusedIndex((prev) =>
          prev !== null ? (prev + 1) % focusableElements.length : 0,
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocusedIndex((prev) =>
          prev !== null
            ? (prev - 1 + focusableElements.length) % focusableElements.length
            : focusableElements.length - 1,
        );
      }
    }
  };

  return (
    <nav
      className={styles.navContainer}
      role="navigation"
      aria-label="Main Navigation"
      onKeyDown={handleKeyDown}
      ref={navRef}>
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
        <button
          className={styles.loginButton}
          aria-label="Log in to your account">
          Log In
        </button>
        <button
          className={styles.getStartedButton}
          aria-label="Sign up and get started">
          Get started
        </button>
      </div>
    </nav>
  );
};

export default NavItem;
