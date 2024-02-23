import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../components/shared/Loading";

export const ProtectedRoute = () => {
  const { user, isFetching } = useSelector((state) => state.auth);

  if (isFetching) {
    return <Loading />;
  }

  return user ? (
    <Outlet />
  ) : (
    <div className="bg-white w-1/2 mx-auto p-8 mt-8 flex flex-col space-y-4 text-center drop-shadow-xl">
      <h2 className="text-3xl font-bold">403 Forbidden</h2>
      <p className="text-red-700">
        Sorry, you don't have permission to access this page. If you believe
        this is an error, please contact the administrator or go back to the
        homepage
      </p>
    </div>
  );
};
