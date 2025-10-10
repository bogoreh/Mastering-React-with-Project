import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: 'food'
  });

  const categories = [
    { value: 'food', label: '🍕 Food & Dining' },
    { value: 'shopping', label: '🛍️ Shopping' },
    { value: 'transport', label: '🚗 Transport' },
    { value: 'bills', label: '📱 Bills & Utilities' },
    { value: 'entertainment', label: '🎬 Entertainment' },
    { value: 'health', label: '🏥 Health' },
    { value: 'other', label: '📦 Other' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.description.trim() || !formData.amount) {
      alert('Please fill in all fields');
      return;
    }

    const expense = {
      id: Date.now().toString(),
      description: formData.description.trim(),
      amount: parseFloat(formData.amount),
      category: formData.category,
      date: new Date().toISOString()
    };

    onAddExpense(expense);
    
    // Reset form
    setFormData({
      description: '',
      amount: '',
      category: 'food'
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="card">
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit} className="expense-form">
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="What did you spend on?"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount ($)</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="0.00"
            min="0"
            step="0.01"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            {categories.map(cat => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="submit-btn">
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;