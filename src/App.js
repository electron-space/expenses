import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenses from './components/AddExpenses';
import { AppProvider } from './context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-2">Expenses Planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3">Add Another</h3>
        <div className="mt-3">
          <div className="col-sm">
            <AddExpenses />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
