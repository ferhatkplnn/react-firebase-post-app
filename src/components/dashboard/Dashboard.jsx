import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";

const Dashboard = () => {
  return (
    <div className=" container mx-auto flex justify-between gap-40 p-8">
      <div className="flex flex-col space-y-8 basis-1/2">
        <ProjectList />
        <ProjectList />
        <ProjectList />
      </div>
      <div className="basis-1/2">
        <Notifications />
      </div>
    </div>
  );
};

export default Dashboard;
