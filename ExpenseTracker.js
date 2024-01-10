
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItem.css";

function ExpenseTracker({ onAddExpense, expenses }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [filter, setFilter] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const filterChangeHandler = (event) => {
    setFilter(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newExpense = {
      id: expenses ? expenses.length + 1 : 1,
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

      if (typeof onAddExpense === "function") {
        onAddExpense(newExpense);
      }

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const filteredExpenses = expenses
    ? expenses.filter((expense) =>
        expense.title.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  return (
    <div className="expense-tracker">
      <h1>Expense Tracker</h1>

      <label>
        Filter Expenses:
        <input type="text" value={filter} onChange={filterChangeHandler} />
      </label>

      {filteredExpenses.length === 1 ? (
        <div>
          <p>Only single Expense here. Please add more...</p>
          <ExpenseItem
            key={filteredExpenses[0].id}
            title={filteredExpenses[0].title}
            amount={filteredExpenses[0].amount}
          />
        </div>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
          />
        ))
      )}

      <form onSubmit={submitHandler}>
        <label>
          Expense Title:
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </label>
        <label>
          Expense Amount:
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </label>
        <label>
          Expense Date:
          <input type="date" value={enteredDate} onChange={dateChangeHandler} />
        </label>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseTracker;
