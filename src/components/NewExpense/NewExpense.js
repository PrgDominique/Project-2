import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showme, SetShowme] = useState(true)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const handleShow = () => {
    SetShowme(!showme)
  }
  return (
    <div className="new-expense">
     {showme ? <button onClick={handleShow}>Add new expense</button> :
      <ExpenseForm SaveExpenseData={saveExpenseDataHandler} assist={handleShow} />}
    </div>
  );
};

export default NewExpense;
