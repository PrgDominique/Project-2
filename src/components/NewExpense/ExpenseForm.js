import { useState } from "react";


const ExpenseForm = (props) => {
  const [enterTitle, setTitle] = useState("");
  const [enterAmount, setAmount] = useState("");
  const [enterDate, setDate] = useState("");

  const TitleChanged = (e) => {
    setTitle(e.target.value);
  };
  const AmountChanged = (e) => {
    setAmount(e.target.value);
  };
  const DateChanged = (e) => {
    setDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };
    props.SaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={TitleChanged} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enterAmount}
            min="0.01"
            step="0.01"
            onChange={AmountChanged}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enterDate}
            min="2000-01-01"
            max="2022-12-31"
            onChange={DateChanged}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense</button>
      </div>
    </form>
    
  );
};

export default ExpenseForm;
