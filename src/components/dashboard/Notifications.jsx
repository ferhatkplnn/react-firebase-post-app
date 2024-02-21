const Notifications = () => {
  return (
    <>
      <div className="bg-white p-8 flex flex-col rounded-lg drop-shadow-xl">
        <h2 className="text-4xl font-medium mb-10">Notification</h2>
        <div className="flex flex-col space-y-4">
          <div>
            <p className="text-xl">
              <span className="text-red-500">Mario Plummer</span> Added a new
              Project
            </p>
            <p className="text-slate-400 text-lg">3 hours ago</p>
          </div>

          <div>
            <p className="text-xl">
              <span className="text-red-500">Mario Plummer</span> Added a new
              Project
            </p>
            <p className="text-slate-400 text-lg">3 hours ago</p>
          </div>

          <div>
            <p className="text-xl">
              <span className="text-red-500">Mario Plummer</span> Added a new
              Project
            </p>
            <p className="text-slate-400 text-lg">3 hours ago</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;
