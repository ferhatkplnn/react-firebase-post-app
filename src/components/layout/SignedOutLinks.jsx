import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <>
      <div className="flex items-center text-lg font-semibold">
        <NavLink className="py-8 px-2 hover:bg-slate-700" to="/">
          Signup
        </NavLink>
        <NavLink className="py-8 px-2 hover:bg-slate-700" to="/">
          Login
        </NavLink>
      </div>
    </>
  );
};

export default SignedOutLinks;
