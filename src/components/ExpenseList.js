import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
  const expenses = [
    { id: 12, name: 'Rent', cost: 800 },
    { id: 13, name: 'Travel', cost: 250 },
    { id: 14, name: 'Groceries', cost: 300 },
    { id: 15, name: 'Celluar', cost: 80 },
    { id: 16, name: 'Online Spending', cost: 150 },
  ];
  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
