import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const styles = {
  nav: `bg-slate-800 text-slate-200 shadow-xl`,
  container: `container mx-auto  flex justify-between items-center `,
  logo: `text-5xl font-semibold flex flex-col`,
};

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link className={styles.logo} to="/">
          <span className="text-2xl ">Splash</span> Posts
        </Link>

        <SignedOutLinks />
        <SignedInLinks />
      </div>
    </nav>
  );
};

export default Navbar;
