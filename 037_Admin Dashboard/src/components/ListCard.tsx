import user from "../assets/user.jpg";
import MaterialIcon from "./MaterialIcon";

interface UserListProps {
  name: string;
  date: string;
  money: string;
}

const UserList = ({ name, date, money }: UserListProps) => (
  <div className="flex flex-row justify-between  p-3">
    <div className="flex flex-row gap-2">
      <img src={user} alt="" className="w-10 h-10 rounded-full" />
      <div className="flex flex-col">
        <p className="font-semibold">{name}</p>
        <p className="text-[#7e7c7c]">{date}</p>
      </div>
    </div>
    <div className="flex flex-row gap-5">
      <p className="my-auto font-semibold">{money}</p>
      <button>
        <MaterialIcon className="my-auto" icon="more_vert" />
      </button>
    </div>
  </div>
);

const ListCard = () => {
  return (
    <div className="bg-white w-2/3 h-[40] rounded-xl px-3 py-2 flex flex-col gap-5  ">
      <div className="flex flex-row justify-between  ">
        <p className="my-auto font-semibold ">Last Transaction</p>
        <div className="flex flex-row gap-2">
          <button className="underline">Newest</button>
          <button>Oldest</button>
        </div>
      </div>
      <hr />
      <div className="flex flex-col">
        <UserList name="Bessie Cooper" date="Aug 23, 2010" money="-$3,000" />
        <hr />
        <UserList name="Guy Hawkins" date="Oct 13, 2018" money="$3,000" />
        <hr />
        <UserList name="Floyd Miles" date="Sep 23, 2022" money="$2,500" />
      </div>
    </div>
  );
};

export default ListCard;
