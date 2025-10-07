const ExpenseCard = () => {
  return (
    <div className="bg-white w-11/12 shadow-stone-300 rounded-md shadow-md py-4 px-2 flex flex-col gap-2">
      <div className="flex flex-row justify-between  ">
        <p className="my-auto font-medium ">Expenses & income</p>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <p>Expenses</p>
          <p className="font-semibold">75%</p>
          <p className="text-[#7e7c7c] text-sm">7500</p>
        </div>
        <div className="my-auto">
          <p className="font-semibold">vs</p>
        </div>
        <div className="flex flex-col">
          <p>Income</p>
          <p className="font-semibold">25%</p>
          <p className="text-[#7e7c7c] text-sm">2500</p>
        </div>
      </div>
      <div>
        <div
          className="rounded-md"
          style={{
            height: "25px",
            background: "linear-gradient(to right, #545cd4 75%, #eead11 75%)",
          }}
        />
      </div>
    </div>
  );
};

export default ExpenseCard;
