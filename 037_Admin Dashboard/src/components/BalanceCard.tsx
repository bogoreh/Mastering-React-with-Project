import MaterialIcon from "./MaterialIcon";
import coin from "../assets/coin.jpg";
import linechart from "../assets/linechart.png";
import barchart from "../assets/barchart.png";

const BalanceCard = () => {
  return (
    <div className="bg-white w-1/2 h-[40] rounded-xl px-3 py-2 ">
      <div className="flex flex-row justify-between  ">
        <p className="my-auto font-medium ">Balance Statement</p>
        <button className="flex flex-row gap-1 bg-[#f7f7f7] p-2 rounded-md ">
          Filter <MaterialIcon icon={"expand_more"} />{" "}
        </button>
      </div>
      <div className="flex flex-row">
        <div className="w-1/3 flex flex-col">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold">$564</h1>
            <div className="flex flex-row gap-1">
              <img src={coin} width={50} height={50} alt="" />
              <p className="text-sm">Your total balance</p>
            </div>
          </div>
          <hr className="mt-1 mb-1" />
          <div className="flex flex-col">
            <img src={linechart} className="w-full h-16" alt="linechart" />
            <p className="text-sm text-[#7e7c7c] ">
              analytical data from your balance
            </p>
          </div>
        </div>
        <div className="w-2/3 ">
          <img src={barchart} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
