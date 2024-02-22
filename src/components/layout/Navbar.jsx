import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { useSelector } from "react-redux";

const styles = {
  nav: `bg-slate-800 text-slate-200 shadow-xl h-28 flex justify-between items-center w-screen`,
  container: `container mx-auto h-full flex justify-between items-center `,
  logo: `text-5xl font-semibold flex flex-col`,
};

const Navbar = () => {
  const { user, isFetching } = useSelector((state) => state.auth);
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link className={styles.logo} to="/">
          <span className="text-2xl ">Splash</span> Posts
        </Link>

        {isFetching ? "" : user ? <SignedInLinks /> : <SignedOutLinks />}
      </div>
    </nav>
  );
};

export default Navbar;
