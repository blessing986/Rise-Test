import { useState } from "react";
import NavList from "./NavList";

const NavItem = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <nav className="flex flex-col lg:flex-row gap-16 mt-10 lg:mt-0 w-full lg:w-auto">
        <ul className="flex flex-col gap-9 lg:flex-row justify-center items-start lg:items-center">
          <NavList label="Why Rise" active={active} setActive={setActive} />

          <NavList label="Blog" active={active} setActive={setActive} />
          <NavList
            label="Rise for Business"
            active={active}
            setActive={setActive}
          />
        </ul>

        <div className="flex justify-between gap-2">
          <button className="rounded-[50px] w-[50%] lg:w-auto py-[14px] px-6 text-[#1C232B] bg-[#71879C0D] font-medium text-sm leading-[124%]">
            Log In
          </button>
          <button className="rounded-[50px] w-[50%] lg:w-auto py-[14px] px-5 text-white bg-[#0898A0] font-semibold text-sm leading-[100%]">
            Get started
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavItem;
