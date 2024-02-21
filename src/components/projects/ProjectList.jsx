import ProjectSummary from "./ProjectSummary";
import { useSelector } from "react-redux";

const ProjectList = () => {
  const { projects } = useSelector((state) => state.project);

  return (
    <>
      {projects.map((proje) => (
        <ProjectSummary
          key={proje.id}
          title={proje.title}
          content={proje.content}
        />
      ))}
    </>
  );
};

export default ProjectList;
