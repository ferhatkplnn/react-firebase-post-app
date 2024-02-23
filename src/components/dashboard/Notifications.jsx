import moment from "moment";
import { useRealTimeNotifications } from "../../hooks";
import { useSelector } from "react-redux";

const Notifications = () => {
  const { notifications } = useSelector((state) => state.notification);

  useRealTimeNotifications();
  return (
    <>
      <div className="bg-white p-8 flex flex-col rounded drop-shadow-xl">
        <h2 className="text-3xl md:text-4xl font-medium mb-5 md:mb-10 ">
          Notification
        </h2>
        <div className="flex flex-col space-y-2 md:space-y-4">
          {notifications.map((notification) => (
            <div key={notification?.id}>
              <p className="text-md md:text-xl">
                <span className="text-red-500">{notification?.user}</span>{" "}
                {notification?.content}
              </p>
              <p className="text-slate-400 text-xs md:text-lg">
                {moment(notification?.time).fromNow()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notifications;
