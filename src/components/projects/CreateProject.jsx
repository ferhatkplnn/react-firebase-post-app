import { useState } from "react";
import Input from "../shared/Input";

const SignIn = () => {
  const [inputs, setInputs] = useState({ title: "", content: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(inputs);
  };

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto bg-white p-8 max-w-5xl mt-16 rounded-sm drop-shadow-lg">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-12">
        <h1 className="text-4xl font-sans font-medium">Create a New Project</h1>

        <Input
          type="text"
          placeholder="Project Title"
          name="title"
          handleChange={handleChange}
          value={inputs.title}
        />
        <Input
          type="text"
          placeholder="Project Content"
          name="content"
          handleChange={handleChange}
          value={inputs.content}
        />

        <button className="self-start px-4 py-2 bg-pink-500 text-white uppercase rounded-sm hover:brightness-125">
          Create
        </button>
      </form>
    </div>
  );
};

export default SignIn;
