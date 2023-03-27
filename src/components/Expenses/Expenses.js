import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState(2023);

  const onChangeYearFilter = (year) => {
    setYearFilter(year);
    console.log("yearFilter", yearFilter + " => " + year);
  };

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter onChangeYearFilter={onChangeYearFilter} />

        {props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
