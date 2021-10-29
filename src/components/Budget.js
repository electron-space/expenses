import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget } = useContext(AppContext);
  return (
    <div className="alert alert-primary">
      <span>Budget: ${budget}</span>
    </div>
  );
};

export default Budget;
