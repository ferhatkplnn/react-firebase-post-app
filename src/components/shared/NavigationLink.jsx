import { NavLink } from "react-router-dom";

const NavigationLink = ({ to, text, ...props }) => {
  return (
    <>
      <NavLink
        className="text-sm md:text-lg py-8 px-5 hover:bg-slate-700"
        to={to}
        {...props}
      >
        {text}
      </NavLink>
    </>
  );
};

export default NavigationLink;
