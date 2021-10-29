import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, expense) => {
    return (total += expense.cost);
  }, 0);

  return (
    <div className="alert alert-warning">
      <span>Total Spent: ${totalExpenses}</span>
    </div>
  );
};

export default ExpenseTotal;
