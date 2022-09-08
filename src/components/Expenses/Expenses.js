import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filterYearHandler = (enteredYear) => {
    setFilterYear(enteredYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeYear={filterYearHandler}
        />
      <ExpensesList items={filteredExpenses}/>
      </Card>
    </li>
  );
};

export default Expenses;
