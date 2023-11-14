import React, { useState } from 'react';

const TransactionList = ({ transactions, onAddTransaction, onFilterTransactions }) => {
  const [newTransaction, setNewTransaction] = useState({ description: '', amount: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTransaction = (e) => {
    e.preventDefault();
    onAddTransaction(newTransaction);
    setNewTransaction({ description: '', amount: '' });
  };
  return (
    <div>
        <form onSubmit={handleAddTransaction}>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={newTransaction.description}
            onChange={handleInputChange}
          />
     </label>
     <label>
          Amount:
          <input
            type="text"
            name="amount"
            value={newTransaction.amount}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add Transaction</button>
      </form>