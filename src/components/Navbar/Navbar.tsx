import logo from "../../assets/logo.png";
import NavItem from "./NavItem";
import menu from "../../assets/menu.png";
import close from "../../assets/close.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header>
        {/* Desktop view */}
        <section className="hidden lg:block">
          <div className="flex justify-between items-center px-[100px] py-6">
            <img src={logo} alt="logo" />

            <NavItem />
          </div>
        </section>

        {/* Mobile View */}
        <section className="lg:hidden px-5 py-6 flex justify-between items-center">
          <img src={logo} alt="logo" />
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src={isOpen ? close : menu} alt="menu" />
          </button>
        </section>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-start px-5 py-6">
            <div className="flex justify-between w-full">
              <img src={logo} alt="logo" />
              <button onClick={() => setIsOpen(false)}>
                <img src={close} alt="close menu" className="w-4 h-4" />
              </button>
            </div>
            <NavItem />
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
