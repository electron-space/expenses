import React, { createContext, useReducer } from 'react';

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    default:
      return state;
  }
};

const initialState = {
  budget: 3100,
  expenses: [
    { id: 14, name: 'rent', cost: 1200 },
    { id: 11, name: 'groceries', cost: 200 },
    { id: 12, name: 'celluar', cost: 80 },
    { id: 13, name: 'travel', cost: 300 },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
