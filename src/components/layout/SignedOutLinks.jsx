import NavigationLink from "../shared/NavigationLink";

const SignedOutLinks = () => {
  return (
    <>
      <div className="flex items-center text-lg font-semibold">
        <NavigationLink to="/signup" text="Sign Up" />
        <NavigationLink to="/signin" text="Login" />
      </div>
    </>
  );
};

export default SignedOutLinks;
