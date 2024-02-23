import { NavLink } from "react-router-dom";
import NavigationLink from "../shared/NavigationLink";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config/firebase";
import { useSelector } from "react-redux";

const SignedInLinks = () => {
  const { userDetail } = useSelector((state) => state.auth);

  const handleLogOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
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
          {userDetail?.initials?.toUpperCase()}
        </NavLink>
      </div>
    </>
  );
};

export default SignedInLinks;
