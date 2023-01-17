import React, { useState } from 'react'
import axios from 'axios';
import"./login.css"
import { useNavigate } from 'react-router-dom';
import Register from '../Register/register';
 
 
const Login: React.FC <any> = () => {
  const user ={
 
    id:0,
    username:"",
    password:""
  }
 
  const [username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const [error, setError] = useState("");
 
 
  const navigate = useNavigate();
 
  const gatherInput = (input:any) => {
    if(input.target.name === "username"){
        setUsername(input.target.value)
    } else {
        setPassword(input.target.value)
    }
  }
 
  const login = async () => {
 
    try {
      const response = await axios.post("http://localhost:5000/auth", {username, password});
      if(response.status === 202) {
        console.log(response);
 
        user.id = response.data.id;
        user.username = response.data.username;
        user.password = response.data.password;
 
        if(user.id > 0){
 
          navigate("/dashboard")
        }
      }
    }   catch (error) {
 
      if(error instanceof Error){
         const err = error as Error;
         setError("Your username or password is wrong ! please try again");
      }
 
    }
  }
 
 
return (
    <div className="login">
              {error && <p className="error-message">{error}</p>}
             
        <div className='textlogin'>
 
            <h1>Welcome to Revature Financial Center </h1>
        </div>
        <div className='user'>
          <input type="text" name="username" placeholder='Username' onChange={gatherInput}/>
        </div>
       
        <div className='user'>
        <input type="password" name='password' placeholder='Password' onChange={gatherInput}/>
        </div>
       
        <button className='login-button' onClick={login}>Log in</button>
        <button className='register-button' onClick={() => navigate('Register')}> New Users Register here </button>
 
        <div className='disclaimer'>
 
            <p>YOU AGREE THAT YOUR USE OF ANY REMOTE BANKING SERVICE AND ALL INFORMATION AND CONTENT
                (INCLUDING THAT OF THIRD PARTIES) IS AT YOUR RISK AND IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS.
                WE DISCLAIM ALL WARRANTIES OF ANY KIND AS TO THE USE OF ANY REMOTE BANKING SERVICE, WHETHER EXPRESS
                OR IMPLIED, INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
                 WE MAKE NO WARRANTY THAT ANY REMOTE BANKING SERVICE WILL MEET YOUR REQUIREMENTS OR WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE.
                 WE MAKE NO WARRANTY THAT THE RESULTS THAT MAY BE OBTAINED WILL BE ACCURATE OR RELIABLE OR THAT ANY ERRORS IN ANY REMOTE BANKING SERVICE OR TECHNOLOGY WILL BE CORRECTED.
                LIMITATION OF LIABILITY. YOU AGREE THAT WE WILL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING, BUT NOT LIMITED TO,
                DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER LOSSES INCURRED BY YOU OR ANY THIRD PARTY ARISING FROM OR RELATED TO THE USE OF,
                INABILITY TO USE, OR THE TERMINATION OF THE USE OF ANY REMOTE BANKING SERVICE, REGARDLESS OF THE FORM OF ACTION OR CLAIM
                (WHETHER CONTRACT, TORT, STRICT LIABILITY OR OTHERWISE), EVEN IF WE HAVE BEEN INFORMED OF THE POSSIBILITY THEREOF, EXCEPT AS OTHERWISE REQUIRED BY LAW.</p>
 
        </div>
       
        </div>
  )
 
}
export default Login
 
