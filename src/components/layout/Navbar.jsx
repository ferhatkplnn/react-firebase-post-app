import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { useSelector } from "react-redux";

const styles = {
  nav: `bg-slate-800 text-slate-200 shadow-xl min-h-28  px-2 w-screen`,
  container: `container mx-auto h-full flex flex-col md:flex-row md:justify-between items-center pt-2`,
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
