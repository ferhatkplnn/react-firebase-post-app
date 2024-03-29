import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../shared/Input";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config/firebase";
import Loading from "../shared/Loading";
import { createNotification, createUserDetail } from "../../firebase/Actions";
import { useDispatch } from "react-redux";
import { showToast } from "../../redux/uiSlice";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [isError, setIsError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    singUpEmailPassword();
  };

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const singUpEmailPassword = async () => {
    try {
      const { email: loginEmail, password: loginPassword } = inputs;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );

      // Create user detail
      if (userCredential.user) {
        const userDetail = {
          firstName: inputs.firstName,
          lastName: inputs.lastName,
          initials: inputs.firstName[0] + inputs.lastName[0],
        };

        createUserDetail(userCredential.user.uid, userDetail);

        const notificationDetail = {
          content: "Joined the party",
          time: Date.now(),
          user: inputs.firstName + " " + inputs.lastName,
        };
        createNotification(notificationDetail);

        navigate("/");
        dispatch(
          showToast({
            type: "created",
            message: "Account created successfully!",
          })
        );
      }
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
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
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 md:space-y-8"
      >
        <h1 className="text-3xl md:text-4xl font-sans font-medium flex space-x-3">
          <span>Sign Up</span> {isPending && <Loading />}
        </h1>

        <Input
          type="email"
          placeholder="Email"
          name="email"
          handleChange={handleChange}
          value={inputs.email}
        />

        <Input
          type="password"
          placeholder="Password"
          name="password"
          handleChange={handleChange}
          value={inputs.password}
        />

        <Input
          type="text"
          placeholder="First Name"
          name="firstName"
          handleChange={handleChange}
          value={inputs.firstName}
        />

        <Input
          type="text"
          placeholder="Last Name"
          name="lastName"
          handleChange={handleChange}
          value={inputs.lastName}
        />

        <p className="!mt-2 text-red-500 h-6">
          {isError && `Email already in using.`}{" "}
        </p>

        <button
          type="submit"
          className="self-start px-4 py-2 bg-pink-500 text-white uppercase rounded-sm hover:brightness-125"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
