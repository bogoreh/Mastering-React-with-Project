import crown from "../assets/crown.png";

const PremiumCard = () => {
  return (
    <div className="bg-white w-11/12 shadow-stone-300 rounded-md shadow-md py-4 px-2 flex flex-col gap-5">
      <div className="flex flex-row justify-between  ">
        <p className="my-auto font-medium w-full text-center">Go to Premium</p>
      </div>
      <div className="flex flex-col gap-5">
        <img src={crown} width={100} height={100} alt="" />
        <div className="flex flex-col">
          <p className="font-semibold">Need more features?</p>
          <p>Update your account to premium to get additional features</p>
        </div>
        <div className="px-2 items-center">
          <button className="bg-[#545cd4] w-full text-white py-3 rounded-md">
            Get now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumCard;
