import { Link } from "react-router-dom";
import { useRealTimeData } from "../../hooks";
import ProjectSummary from "./ProjectSummary";
import { useSelector } from "react-redux";
import Loading from "../shared/Loading";

const ProjectList = () => {
  const { projects, isFetching } = useSelector((state) => state.project);

  useRealTimeData();

  if (isFetching) {
    return <Loading />;
  }

  return (
    <>
      {projects.map((project) => (
        <Link to={`/project/${project.id}`} key={project.id}>
          <ProjectSummary project={project} />
        </Link>
      ))}
    </>
  );
};

export default ProjectList;
