import NavigationLink from "../shared/NavigationLink";

const SignedOutLinks = () => {
  return (
    <>
      <div className="flex items-center text-lg font-semibold">
        <NavigationLink to="/" text="Sign Up" />
        <NavigationLink to="/" text="Login" />
      </div>
    </>
  );
};

export default SignedOutLinks;
