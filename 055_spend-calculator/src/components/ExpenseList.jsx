import './ExpenseList.css';

function ExpenseList({ expenses, onDeleteExpense }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatAmount = (amount) => {
    return `$${amount.toFixed(2)}`;
  };

  const getCategoryIcon = (category) => {
    const icons = {
      food: '🍕',
      shopping: '🛍️',
      transport: '🚗',
      bills: '📱',
      entertainment: '🎬',
      health: '🏥',
      other: '📦'
    };
    return icons[category] || '📦';
  };

  if (expenses.length === 0) {
    return (
      <div className="card">
        <h2>Recent Expenses</h2>
        <div className="no-expenses">
          No expenses recorded yet. Start adding your expenses!
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Recent Expenses</h2>
      <div className="expenses-list">
        {expenses.slice().reverse().map(expense => (
          <div key={expense.id} className="expense-item">
            <div className="expense-icon">
              {getCategoryIcon(expense.category)}
            </div>
            
            <div className="expense-details">
              <div className="expense-description">
                {expense.description}
              </div>
              <div className="expense-date">
                {formatDate(expense.date)}
              </div>
            </div>
            
            <div className="expense-amount">
              {formatAmount(expense.amount)}
            </div>
            
            <button
              onClick={() => onDeleteExpense(expense.id)}
              className="delete-btn"
              aria-label="Delete expense"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseList;