import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto mt-8  pt-8 bg-white w-3/5 flex flex-col space-y-8 drop-shadow-xl rounded-lg overflow-hidden">
      <h1 className="text-4xl font-medium px-8">Project Title - {id}</h1>
      <p className="px-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod culpa
        sit, illo labore iste maiores minima minus suscipit dicta natus qui
        accusantium deleniti animi, nihil esse tenetur? Culpa, atque similique.
      </p>
      <div className="bg-slate-100 px-8 py-4 italic text-sm text-slate-500/70">
        <p>Posted by Mario Plummer</p>
        <p>Toda at 12:36 PM</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
