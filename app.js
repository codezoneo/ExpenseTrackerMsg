
import React, { useState } from "react";
import ExpenseTracker from "./ExpenseTracker";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <div>
      <ExpenseTracker onAddExpense={addExpenseHandler} expenses={expenses} />
    </div>
  );
}

export default App;
