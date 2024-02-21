import { useState } from "react";
import Input from "../shared/Input";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(inputs);
  };

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto bg-white p-8 max-w-xl mt-16 rounded-sm drop-shadow-lg">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-12">
        <h1 className="text-4xl font-sans font-medium">Sign Up</h1>

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

        <button className="self-start px-4 py-2 bg-pink-500 text-white uppercase rounded-sm hover:brightness-125">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
