import { useState } from "react";
import Input from "../shared/Input";

const SignIn = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });

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
        <h1 className="text-4xl font-sans font-medium">Sign In</h1>

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

        <button className="self-start px-4 py-2 bg-pink-500 text-white uppercase rounded-sm hover:brightness-125">
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;
