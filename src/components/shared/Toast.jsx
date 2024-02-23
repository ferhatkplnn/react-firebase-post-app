import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { BiLogIn } from "react-icons/bi";
import { hideToast } from "../../redux/uiSlice";

const Toast = () => {
  const { type, message } = useSelector((state) => state.ui);
  const [moveClass, setMoveClass] = useState("-top-20");
  const dispatch = useDispatch();

  const toastTypes = {
    added: "bg-blue-400",
    created: "bg-yellow-400",
    logout: "bg-red-400",
    login: "bg-green-400",
  };

  const icons = {
    added: <BsFillMegaphoneFill />,
    created: <BsFillPersonCheckFill />,
    logout: <BiLogOut />,
    login: <BiLogIn />,
  };

  useEffect(() => {
    setMoveClass("top-10");
    const id1 = setTimeout(() => {
      setMoveClass("-top-20");
    }, 3000);
    const id2 = setTimeout(() => {
      dispatch(hideToast());
    }, 3500);
    return () => {
      clearTimeout(id1);
      clearTimeout(id2);
    };
  }, [dispatch]);

  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 transition-all duration-500 px-4 py-2 ${moveClass} ${toastTypes[type]} text-gray-800 rounded flex justify-center items-center space-x-4`}
    >
      {icons[type]} <span>{message}</span>
    </div>
  );
};

export default Toast;
