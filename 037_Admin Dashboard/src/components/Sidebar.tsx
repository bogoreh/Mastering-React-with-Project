import MaterialIcon from "./MaterialIcon";
import userImg from "../assets/user.jpg";

const navs = [
  {
    icon: "home",
  },
  {
    icon: "notifications",
  },
  {
    icon: "timer",
  },
  {
    icon: "group",
  },
  {
    icon: "create_new_folder",
  },
  {
    icon: "settings",
  },
];

const Sidebar = () => {
  return (
    <div className=" w-24 bg-white h-screen fixed flex flex-col justify-between py-2">
      <div className="flex justify-center items-center flex-col gap-5 pt-10">
        <h1 className="text-3xl font-bold">S.</h1>
        <div className=" bg-[#f3e4c5] w-10 h-10 rounded-full justify-center items-center flex ">
          <MaterialIcon className="text-xl" icon="open_in_new" />
        </div>
      </div>
      <div className=" flex justify-center items-center  ">
        <div className="bg-[#f7f6fe] flex flex-col gap-6 px-2 py-2   rounded-full ">
          {navs.map((item, index) => (
            <MaterialIcon
              className="hover:bg-[#545cd4]  hover:text-white rounded-full px-1 py-1 cursor-pointer text-[#7e7c7c] "
              icon={item.icon}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center pb-10">
        <div className="flex flex-col gap-1">
          <div className="w-10 h-10 rounded-full">
            <img src={userImg} alt="" className="rounded-full" />
          </div>
          <div className=" bg-[#f7f6fe] w-10 h-10 rounded-full justify-center items-center flex ">
            <MaterialIcon icon="logout" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
//
