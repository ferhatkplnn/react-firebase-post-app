const ProjectSummary = ({ title, content }) => {
  return (
    <>
      <div className="border flex flex-col p-12 bg-white drop-shadow-lg rounded-md space-y-1">
        <h2 className="text-4xl font-medium mb-4">{title}</h2>
        <p className="text-xl">{content}</p>
        <p className="text-lg text-slate-400">Today at 3:26 PM</p>
      </div>
    </>
  );
};

export default ProjectSummary;
