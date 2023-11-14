import React, { useState, useEffect } from 'react';
import Header from "./Header";
import TransactionList from "./TransactionList";


const App = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch data from the local json server
    fetch('http://localhost:3000/transactions')
      .then(response => response.json())
      .then(data => {
        setTransactions(data);
        setFilteredTransactions(data);
      })
      .catch(error => console.error('Error fetching data:', error));
    }, []);  //loops continiously hence the array so as to run once

    const addTransaction = (newTransaction) => {
      // Simulate adding a new transaction locally
      const updatedTransactions = [...transactions, { id: transactions.length + 1, ...newTransaction }];
      setTransactions(updatedTransactions);
      setFilteredTransactions(updatedTransactions);
    };
  

  return(
    <div>
      <Header />
      <TransactionList />
      
    
      
    </div>
  )
}




export default App;


