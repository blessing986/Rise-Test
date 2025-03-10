/* eslint-disable no-unused-vars */
interface NavListType {
  label: string;
  active: string | null;
  setActive: (label: string) => void;
}

const NavList = ({ label, active, setActive }: NavListType) => {

  return (
    <>
      <li
        className={`font-medium text-2xl lg:text-sm leading-[124%] cursor-pointer relative ${
          active === label ? "text-[#0898A0]" : ""
        }`}
        onClick={() => setActive(label)}>
        {label}
        {active === label && (
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-15px] w-2 h-2 bg-[#0898A0] rounded-full"></span>
        )}
      </li>
    </>
  );
};

export default NavList;
