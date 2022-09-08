import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filterYearHandler = (enteredYear) => {
    setFilterYear(enteredYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  let expenseContent = <p>No Expenses found.</p>;

  if (filteredExpenses.length > 0){
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeYear={filterYearHandler}
        />
      {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
