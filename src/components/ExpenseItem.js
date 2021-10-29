import React, { useContext } from 'react';

import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

// props from ExpenseList then customizing looks after
const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const deleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge bg-primary rounded-pill mr-3">
          ${props.cost}
        </span>
        <TiDelete size="1.5em" onClick={deleteExpense}></TiDelete>
      </div>
    </li>
  );
};

export default ExpenseItem;
