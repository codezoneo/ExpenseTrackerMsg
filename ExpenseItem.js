
import React, { useState } from "react";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const handleDeleteClick = () => {
    setTitle("Updated");
    console.log(`Expense "${props.title}" deleted`);
  };

  const handleAmountClick = () => {
    setAmount(100);
    console.log(`Amount for expense "${title}" changed to $100`);
  };

  return (
    <div className="expense-item">
      <div>
        <h2>{title}</h2>
        <div className="expense-item_price">${amount}</div>
        <button onClick={handleAmountClick}>Change Amount</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
