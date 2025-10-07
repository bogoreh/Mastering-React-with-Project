import BalanceCard from "./BalanceCard";
import GaugeCard from "./GaugeCard";
import ItemCard from "./ItemCard";
import ListCard from "./ListCard";
import MaterialIcon from "./MaterialIcon";

import TextBoxCard from "./TextBoxCard";

const MidContent = () => {
  return (
    <div className="w-3/4 bg-[#f7f6fe] flex flex-col gap-5 pl-28 pr-5 py-5">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-semibold ">Hello, John.D</h1>
          <p>view and control your finances here</p>
        </div>
        <div className="cursor-pointer bg-white w-10 h-10 flex justify-center items-center rounded-full my-auto ">
          <MaterialIcon icon="search" />
        </div>
      </div>
      <div className="flex flex-row gap-10">
        <BalanceCard />
      </div>
      <div className="flex flex-row gap-2 ">
        <ItemCard />
        <TextBoxCard />
      </div>
      <div className="flex flex-row gap-10">
        <ListCard />
        <GaugeCard />
      </div>
    </div>
  );
};

export default MidContent;
