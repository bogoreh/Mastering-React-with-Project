import EndContent from "../components/EndContent";
import MidContent from "../components/MidContent";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex flex-row bg-red-500 ">
      <Sidebar />
      <MidContent />
      <EndContent />
    </div>
  );
};

export default Dashboard;
