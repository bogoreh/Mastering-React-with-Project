import './SummaryCards.css';

function SummaryCards({ expenses }) {
  const getCurrentWeekRange = () => {
    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());
    startOfWeek.setHours(0, 0, 0, 0);
    
    const endOfWeek = new Date(now);
    endOfWeek.setDate(now.getDate() + (6 - now.getDay()));
    endOfWeek.setHours(23, 59, 59, 999);
    
    return { start: startOfWeek, end: endOfWeek };
  };

  const getCurrentMonthRange = () => {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
    
    return { start: startOfMonth, end: endOfMonth };
  };

  const calculateTotal = (startDate, endDate) => {
    return expenses
      .filter(expense => {
        const expenseDate = new Date(expense.date);
        return expenseDate >= startDate && expenseDate <= endDate;
      })
      .reduce((total, expense) => total + expense.amount, 0);
  };

  const { start: weekStart, end: weekEnd } = getCurrentWeekRange();
  const { start: monthStart, end: monthEnd } = getCurrentMonthRange();

  const weeklyTotal = calculateTotal(weekStart, weekEnd);
  const monthlyTotal = calculateTotal(monthStart, monthEnd);
  const allTimeTotal = expenses.reduce((total, expense) => total + expense.amount, 0);

  const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`;
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="summary-cards">
      <div className="summary-card weekly">
        <div className="card-icon">📅</div>
        <div className="card-content">
          <h3>This Week</h3>
          <p className="amount">{formatCurrency(weeklyTotal)}</p>
          <p className="date-range">
            {formatDate(weekStart)} - {formatDate(weekEnd)}
          </p>
        </div>
      </div>

      <div className="summary-card monthly">
        <div className="card-icon">📊</div>
        <div className="card-content">
          <h3>This Month</h3>
          <p className="amount">{formatCurrency(monthlyTotal)}</p>
          <p className="date-range">
            {formatDate(monthStart)} - {formatDate(monthEnd)}
          </p>
        </div>
      </div>

      <div className="summary-card all-time">
        <div className="card-icon">💰</div>
        <div className="card-content">
          <h3>All Time</h3>
          <p className="amount">{formatCurrency(allTimeTotal)}</p>
          <p className="date-range">Total Spending</p>
        </div>
      </div>
    </div>
  );
}

export default SummaryCards;