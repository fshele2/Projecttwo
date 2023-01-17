import React from 'react'
import { useNavigate } from 'react-router-dom'
import Account from '../Account/account'
import Profile from '../Profile/profile'

import"./dashboard.css"

const Dashboard: React.FC = () => {

  const navigate = useNavigate()

  return (
    <div className='dashCont'>
        <div className='welcome'>
            <h1>Welcome User</h1>
        </div>
        <button className='userpro' onClick={() => navigate('/Profile')}>View User Profile</button>
        
        <h3 className='dashboardmenu'>Dashboard</h3>


    <div className='depo'>
            <button className='income' onClick={() => navigate('/Transactions')}>View Transactions</button>
    </div>   

  <div className='depo'>
            <button className='account' onClick={() => navigate('/Account')}>View Accounts</button>
    </div>    

      <div className='depo'>
            <button className='withdraw' onClick={() => navigate('/Withdraw')}>Withdraw</button>
    </div>    

      <div className='depo'>
            <button className='transfer' onClick={() => navigate('/Transfer')}>Transfer Money between Accounts</button>
    </div>    

      <div className='depo'>
            <button className='send' onClick={() => navigate('/Send')}>Send Money</button>
    </div>   
            

    </div>

       
)
}

export default Dashboard