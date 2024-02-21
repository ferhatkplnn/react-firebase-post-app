import { NavLink } from "react-router-dom";
import NavigationLink from "../shared/NavigationLink";

const SignedInLinks = () => {
  return (
    <>
      <div className="flex items-center text-lg font-semibold">
        <NavigationLink to="/create" text="New Project" />
        <NavigationLink to="/" text="Log Out" />

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
