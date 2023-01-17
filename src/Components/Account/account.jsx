import React from 'react'
import"./account.css"
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

export const Account = () => {
  const [accounts, setAccounts] = useState([]);
  const [error, setError] = useState('');
  const [selectedAccountType, setSelectedAccountType] = useState('all');

   
  const navigate = useNavigate();

  useEffect(() => {
      let endpoint = 'http://localhost:3000/accounts';
      if (selectedAccountType !== 'all') {
          endpoint += `?type=${selectedAccountType}`;
      }
      fetch(endpoint)
      .then(res => res.json())
      .then(json => {
          setAccounts(json);
      })
      .catch(error => {
          setError("Error fetching accounts");
          console.log(error);
      });
  }, [selectedAccountType])

  return (
      <>
          <div className='acctcont'>
              <h1> Accounts </h1>
              <select onChange={e => setSelectedAccountType(e.target.value)}>
                  <option value='all'>All</option>
                  <option value='checking'>Checking</option>
                  <option value='savings'>Savings</option>
                  <option value='loan'>Loan</option>
              </select>
              {error && <p className="error">{error}</p>}
              {accounts.length > 0 ? (
                  <table>
                      <thead>
                          <tr>
                              <th>Account ID</th>
                              <th>Account Type</th>
                              <th>Balance</th>
                          </tr>
                      </thead>
                      <tbody>
                          {accounts.map(account => (
                              <tr key={account.id}>
                                  <td>{account.id}</td>
                                  <td>{account.type}</td>
                                  <td>{account.balance}</td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              ) : (
                  <p>No accounts found.</p>
              )}
          </div>
          
          
          <button onClick={() => navigate('/dashboard')}>Home</button>
      </>
      
  )
}
export default Account