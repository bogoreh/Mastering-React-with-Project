import MaterialIcon from "./MaterialIcon";

interface SmallCardProps {
  title: string;
}

const SmallCard = ({ title }: SmallCardProps) => (
  <div className="p-2 bg-[#dfe0eb] w-[49%] rounded-md flex flex-row justify-between ">
    <div className="flex flex-row gap-2">
      <input type="checkbox" />
      <p className="my-auto">{title}</p>
    </div>
    <div className="flex">
      <MaterialIcon className="my-auto" icon={"more_vert"} />
    </div>
  </div>
);

const ItemCard = () => {
  return (
    <div className="bg-white w-1/2 h-[40] rounded-xl px-3 py-2 flex flex-col gap-5 ">
      <div className="flex flex-row justify-between  ">
        <p className="my-auto font-semibold ">List of items to buy</p>
      </div>
      <div className="flex flex-row gap-1">
        <div className="flex flex-col">
          <p className="font-semibold text-2xl">2:00</p>
          <p className="text-[#7e7c7c] text-sm ">Tue, August 30</p>
        </div>
        <div className="my-auto">
          <MaterialIcon
            icon="navigate_next"
            className="text-4xl text-[#7e7c7c] "
          />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-2xl">5:00</p>
          <p className="text-[#7e7c7c] text-sm ">Tue, August 30</p>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <button className="flex flex-row hover:bg-[#f7f6fe] px-2 rounded-md ">
          <MaterialIcon className="my-auto text-xl" icon={"check"} />
          <p className="my-auto">Shopping List</p>
        </button>
        <button className="flex flex-row hover:bg-[#f7f6fe] px-2 rounded-md ">
          <MaterialIcon icon={"add"} className="text-xl" />
          <p className="my-auto">Add Shopping Item</p>
        </button>
      </div>
      <div className="flex flex-row flex-wrap gap-2 ">
        <SmallCard title={"Macbook"} />
        <SmallCard title={"Bicycle"} />
        <SmallCard title={"Motor Cycle"} />
        <SmallCard title={"Iphone 14 pro"} />
      </div>
    </div>
  );
};

export default ItemCard;
