import { NavLink } from "react-router-dom";

const NavigationLink = ({ to, text, ...props }) => {
  return (
    <>
      <NavLink className="py-8 px-2 hover:bg-slate-700" to={to} {...props}>
        {text}
      </NavLink>
    </>
  );
};

export default NavigationLink;
