import DashboardContainers from "../containers/DashBoardContainers";
import { useAuthAction } from "../api/authAction";
const DasboardPages = () => {
  const { logout } = useAuthAction();

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <DashboardContainers
        onLogout={logout}
      />
    </div>
  );
};

export default DasboardPages;
