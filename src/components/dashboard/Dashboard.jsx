import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";

const Dashboard = () => {
  return (
    <div className="w-screen">
      <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between gap-8 md:gap-40 p-4 md:p-8 ">
        <div className="flex flex-col space-y-4  md:basis-1/2">
          <ProjectList />
        </div>
        <div className="md:basis-1/2">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
