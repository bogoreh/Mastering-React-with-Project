import MaterialIcon from "./MaterialIcon";
import user from "../assets/user.jpg";

interface SpendingListProps {
  name: string;
  date: string;
}

const SpendingList = ({ name, date }: SpendingListProps) => (
  <div className="flex flex-row justify-between  px-3 py-5">
    <div className="flex flex-row gap-3">
      <img src={user} alt="" className="w-10 h-10 rounded-full" />
      <div className="flex flex-col">
        <p className="font-semibold">{name}</p>
        <p className="text-[#7e7c7c]">{date}</p>
      </div>
    </div>
  </div>
);

const SpendingCard = () => {
  return (
    <div className="bg-white w-11/12 shadow-stone-300 rounded-md shadow-md py-4 px-2 flex flex-col gap-2">
      <div className="flex flex-row justify-between  ">
        <p className="my-auto font-semibold ">Latest Spending</p>
        <button>
          <MaterialIcon icon="more_vert" />
        </button>
      </div>
      <div>
        <SpendingList name={"Online Store"} date={"May 10, 2023 at 20;00"} />
        <hr />
        <SpendingList
          name={"Pay the hospital"}
          date={"May 10, 2023 at 20;00"}
        />
        <hr />
        <SpendingList name={"Tickets"} date={"May 10, 2023 at 20;00"} />
      </div>
      <div className="flex items-center justify-center">
        <button className="text-[#545cd4] flex flex-row">
          <p className="my-auto">View All</p>{" "}
          <MaterialIcon className="my-auto text-xl" icon="arrow_forward" />
        </button>
      </div>
    </div>
  );
};

export default SpendingCard;
