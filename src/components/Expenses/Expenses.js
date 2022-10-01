import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList"

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const ExpenseFilter = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

 
 
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={ExpenseFilter}/>
    <ExpensesList items={ExpenseFilter} />
    </Card>
  );
  
}

export default Expenses;
