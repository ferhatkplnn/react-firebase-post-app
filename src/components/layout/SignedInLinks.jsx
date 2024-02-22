import { NavLink } from "react-router-dom";
import NavigationLink from "../shared/NavigationLink";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const SignedInLinks = () => {
  const handleLogOut = async () => {
    try {
      await signOut(auth);
      console.log("log out");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex items-center text-lg font-semibold">
        <NavigationLink to="/create" text="New Project" />
        <NavigationLink onClick={handleLogOut} to="/" text="Log Out" />

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
