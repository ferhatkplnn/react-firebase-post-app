import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <>
      <div className="flex items-center text-lg font-semibold">
        <NavLink className="py-8 px-2 hover:bg-slate-700" to="/">
          New Project
        </NavLink>
        <NavLink className="py-8 px-2 hover:bg-slate-700" to="/">
          Log Out
        </NavLink>
        <NavLink
          to="/"
          className="bg-orange-800 h-16 w-16 rounded-full flex items-center justify-center mx-4 "
        >
          NN
        </NavLink>
      </div>
    </>
  );
};

export default SignedInLinks;
