import { useParams } from "react-router-dom";
import { useSingleDataById } from "../../hooks";

const ProjectDetails = () => {
  const { id } = useParams();

  const [projectData] = useSingleDataById(id);

  if (projectData === null) {
    return (
      <div className="flex justify-center mt-20 text-3xl font-medium text-orange-400">
        Something has gone wrong. Please try again later.
      </div>
    );
  }

  return (
    <>
      {projectData && (
        <div className="container mx-auto mt-8  pt-8 bg-white w-3/5 flex flex-col space-y-8 drop-shadow-xl rounded-lg overflow-hidden">
          <h1 className="text-4xl font-medium px-8">{projectData?.title}</h1>
          <p className="px-8">{projectData?.content}</p>
          <div className="bg-slate-100 px-8 py-4 italic text-sm text-slate-500/70">
            <p>Posted by Mario Plummer</p>
            <p>Toda at 12:36 PM</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetails;
