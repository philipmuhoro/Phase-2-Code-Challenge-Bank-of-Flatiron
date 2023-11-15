import React, { useState, useEffect } from 'react';
import Header from "./Header";
import TransactionList from "./TransactionList";
import './App.css';


const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);


  useEffect(() => {
    // Fetch data from the local json server
    fetch('https://my-json-server.typicode.com/philipmuhoro/Phase-2-Code-Challenge-Bank-of-Flatiron/transactions')
      .then(response => response.json())
      .then(data => {
        setTransactions(data);
        setFilteredTransactions(data);
      })
      .catch(error => console.error('Error fetching data:', error));
    }, []);  //loops continiously hence the array so as to run once

    const addTransaction = (newTransaction) => {
      // Adding a new transaction locally
      const updatedTransactions = [...transactions, { id: transactions.length + 1, ...newTransaction }];
      setTransactions(updatedTransactions);
      setFilteredTransactions(updatedTransactions);
    };
  
    const filterTransactions = (searchTerm) => {
      const filtered = transactions.filter(transaction =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTransactions(filtered);
    };

  return(
    <div className="App">
      <Header />
      <TransactionList
        transactions={filteredTransactions}
        onAddTransaction={addTransaction}
        onFilterTransactions={filterTransactions}
      />
           
      </div>
  );
};

export default App;






