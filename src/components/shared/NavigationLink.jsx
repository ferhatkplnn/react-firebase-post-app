import { NavLink } from "react-router-dom";

const NavigationLink = ({ to, text }) => {
  return (
    <>
      <NavLink className="py-8 px-2 hover:bg-slate-700" to={to}>
        {text}
      </NavLink>
    </>
  );
};

export default NavigationLink;
