import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../shared/Input";
import { createProjectAsync } from "../../redux/projectSlice";
import Loading from "../shared/Loading";

const initialState = { title: "", content: "" };

const SignIn = () => {
  const [inputs, setInputs] = useState(initialState);
  const { isLoading, error } = useSelector((state) => state.project);
  const { user, userDetail } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createProjectAsync({
        authorId: user,
        createdAt: Date.now(),
        ...userDetail,
        ...inputs,
      })
    );
    setInputs(initialState);
  };

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  if (error) {
    return <p>Error creating project</p>;
  }

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
      {isLoading && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 ">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default SignIn;
