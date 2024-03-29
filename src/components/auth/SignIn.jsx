import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Input from "../shared/Input";
import Loading from "../shared/Loading";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config/firebase";
import { showToast } from "../../redux/uiSlice";

const SignIn = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [isError, setIsError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsPending(true);

    try {
      const { email, password } = inputs;
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        dispatch(
          showToast({
            type: "login",
            message: `You are login!`,
          })
        );
        navigate("/");
      }
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        setIsError(true);
      } else {
        console.error(error);
      }
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="mx-auto max-sm:max-w-xs bg-white p-8 md:max-w-xl mt-4 md:mt-8 rounded-sm drop-shadow-lg">
      <form
        onSubmit={handleSignIn}
        className="flex flex-col space-y-4 md:space-y-8"
      >
        <h1 className="text-3xl md:text-4xl font-sans font-medium flex space-x-3">
          <span>Sign In</span> {isPending && <Loading />}
        </h1>

        <Input
          type="email"
          placeholder="Email"
          name="email"
          handleChange={handleChange}
          value={inputs?.email}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          handleChange={handleChange}
          value={inputs?.password}
        />

        <p className="!mt-2 text-red-500 h-6">
          {isError && `Email or password is wrong.`}
        </p>

        <button
          type="submit"
          className="self-start px-4 py-2 bg-pink-500 text-white uppercase rounded-sm hover:brightness-125"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;
