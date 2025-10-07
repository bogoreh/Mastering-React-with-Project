import MaterialIcon from "./MaterialIcon";
import gauge from "../assets/gauge.png";

const GaugeCard = () => {
  return (
    <div className="bg-white w-1/2 h-[40] rounded-xl px-3 py-2 flex flex-col gap-5  ">
      <div className="flex flex-row justify-between  ">
        <p className="my-auto font-semibold ">Analytics</p>
        <button>
          <MaterialIcon icon="more_vert" />
        </button>
      </div>
      <div>
        <img src={gauge} alt="" />
      </div>
    </div>
  );
};

export default GaugeCard;
