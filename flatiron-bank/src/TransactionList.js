import React, { useState } from 'react';

const TransactionList = ({ transactions, onAddTransaction, onFilterTransactions }) => {
  const [newTransaction, setNewTransaction] = useState({ description: '', amount: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleAddTransaction = (e) => {
    e.preventDefault();
    onAddTransaction(newTransaction);
    setNewTransaction({ description: '', amount: '' });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onFilterTransactions(e.target.value);
  };

  return (
    <div>
      <h2>Recent Transactions</h2>
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
      <input
        type="text"
        placeholder="Search transactions"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>
            <strong>{transaction.description}</strong> - {transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
