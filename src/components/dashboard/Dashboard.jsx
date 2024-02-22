import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";

const Dashboard = () => {
  return (
    <div className="w-screen">
      <div className="container mx-auto flex justify-between gap-40 p-8  ">
        <div className="flex flex-col space-y-8 basis-1/2">
          <ProjectList />
        </div>
        <div className="basis-1/2">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
