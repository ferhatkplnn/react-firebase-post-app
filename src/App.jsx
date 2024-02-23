import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config/firebase";
import { useDispatch } from "react-redux";
import { setIsFetching, setUser } from "./redux/authSlice";
import { setUserDetailById } from "./firebase/Actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.uid));
        setUserDetailById(user.uid, dispatch);
        dispatch(setIsFetching(false));
        return;
      }

      dispatch(setUser(null));
      dispatch(setIsFetching(false));
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
