import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [newTransaction, setNewTransaction] = useState({ type: '', amount: '' });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { type, amount } = newTransaction;
    if (type === 'income') {
      setIncome(income + parseFloat(amount));
    } else {
      setExpenses(expenses + parseFloat(amount));
    }
    setTransactions([...transactions, newTransaction]);
    setNewTransaction({ type: '', amount: '' });
  };

  const handleChange = (event) => {
    setNewTransaction({
      ...newTransaction,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <h2>Track Income and Expenses</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Type:
          <select name="type" onChange={handleChange} value={newTransaction.type}>
            <option value=""></option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </label>
        <br />
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            onChange={handleChange}
            value={newTransaction.amount}
          />
        </label>
        <br />
        <button type="submit">Add Transaction</button>
      </form>
      <h3>Income: {income}</h3>
      <h3>Expenses: {expenses}</h3>
      <h2>All Transactions</h2>
      {transactions.map((transaction, index) => (
        <div key={index}>
          <p>Type: {transaction.type}</p>
          <p>Amount: {transaction.amount}</p>
        </div>
        
      ))}
      
      <button onClick={() => navigate('/dashboard')}>Home</button>
    </div>
    
  );
};

export default Transactions