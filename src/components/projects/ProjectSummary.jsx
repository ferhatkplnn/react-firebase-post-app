import moment from "moment";

const ProjectSummary = ({ project }) => {
  return (
    <>
      <div className="border flex flex-col p-8 pb-4 bg-white drop-shadow-lg rounded-md space-y-4">
        <h2 className="text-4xl font-medium mb-4">{project.title}</h2>
        <p className="text-xl line-clamp-1">{project.content}</p>

        <div className="">
          <p className="text-sm text-slate-400 italic">
            Posted by {project.firstName} {project.lastName}
          </p>
          <p className="text-sm text-slate-400 italic">
            {moment(project.createdAt).format("lll")}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProjectSummary;
