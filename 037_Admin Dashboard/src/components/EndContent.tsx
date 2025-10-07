import ExpenseCard from "./ExpenseCard";
import PremiumCard from "./PremiumCard";
import SpendingCard from "./SpendingCard";

const EndContent = () => {
  return (
    <div className="w-1/4 bg-white flex flex-col items-center py-8 gap-3">
      <ExpenseCard />
      <SpendingCard />
      <PremiumCard />
    </div>
  );
};

export default EndContent;
