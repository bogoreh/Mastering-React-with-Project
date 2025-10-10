import { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import SummaryCards from './components/SummaryCards';
import './App.css';

function App() {
  const [expenses, setExpenses] = useLocalStorage('spend-calculator-expenses', []);

  const handleAddExpense = (expense) => {
    setExpenses(prev => [...prev, expense]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(prev => prev.filter(expense => expense.id !== id));
  };

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>💰 Spend Calculator</h1>
          <p>Track your expenses securely and efficiently</p>
        </header>

        <SummaryCards expenses={expenses} />
        
        <div className="content">
          <ExpenseForm onAddExpense={handleAddExpense} />
          <ExpenseList 
            expenses={expenses} 
            onDeleteExpense={handleDeleteExpense} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;