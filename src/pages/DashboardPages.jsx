import DashboardContainers from "../containers/DashBoardContainers"
import { useAuth } from "../components/hooks/useAuth"


const DasboardPages = () => {
    const {logout} = useAuth()

    return (
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100" >
            <DashboardContainers  onLogout={logout} onAddCategory={null} onAddTask={null}/>
        </div>
    )
}

export default DasboardPages