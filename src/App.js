import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 550,
    date: new Date(2022, 1, 22),
  },
  {
    id: "e5",
    title: "Tax Payment",
    amount: 400.11,
    date: new Date(2023, 6, 6),
  },
  {
    id: "e6",
    title: "New PC",
    amount: 31000.49,
    date: new Date(2024, 3, 15),
  },
  {
    id: "e7",
    title: "New Keyboard",
    amount: 1388.49,
    date: new Date(2024, 4, 12),
  },{
    id: "e8",
    title: "New Gaming Mouse",
    amount: 999.99,
    date: new Date(2024, 4, 12),
  },{
    id: "e9",
    title: "New Headset",
    amount: 2600.80,
    date: new Date(2024, 5, 4),
  },{
    id: "e10",
    title: "New Gaming Monitor",
    amount: 11555.49,
    date: new Date(2024, 6, 30),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prewExpenses) => {
      return [expense, ...prewExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
