import { NavLink } from "react-router-dom";
import NavigationLink from "../shared/NavigationLink";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config/firebase";
import { useSelector, useDispatch } from "react-redux";
import { showToast } from "../../redux/uiSlice";

const SignedInLinks = () => {
  const { userDetail } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    if (!confirm("Are you sure to log out?")) return false;
    dispatch(
      showToast({
        type: "logout",
        message: `You are logged out!`,
      })
    );
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
        <NavigationLink onClick={handleLogOut} text="Log Out" />

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
