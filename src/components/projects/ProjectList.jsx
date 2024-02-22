import { Link } from "react-router-dom";
import { useRealTimeData } from "../../hooks";
import ProjectSummary from "./ProjectSummary";
import { useSelector } from "react-redux";

const ProjectList = () => {
  const { projects } = useSelector((state) => state.project);
  useRealTimeData();

  return (
    <>
      {projects.map((proje) => (
        <Link to={`/project/${proje.id}`} key={proje.id}>
          <ProjectSummary title={proje.title} content={proje.content} />
        </Link>
      ))}
    </>
  );
};

export default ProjectList;
