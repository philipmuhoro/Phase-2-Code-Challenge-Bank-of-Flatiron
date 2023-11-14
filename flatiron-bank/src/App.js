import React, { useState, useEffect } from 'react';
import Header from "./Header";
import TransactionList from "./TransactionList";


const App = () => {


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
  

  return(
    <div>
      <Header />
      <TransactionList />
      
    
      
    </div>
  )
}




export default App;


