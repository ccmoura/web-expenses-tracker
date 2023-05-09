import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState("2023");
  const filteredExpenses = props.items.filter(expense => expense.date.getFullYear() === parseInt(yearFilter))

  const onChangeYearFilter = (year) => {
    setYearFilter(year);
  };

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selectedYear={yearFilter} onChangeYearFilter={onChangeYearFilter} />
      <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
