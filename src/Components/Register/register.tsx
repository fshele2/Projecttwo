import axios from 'axios';
import "./register.css"
import { useState } from "react";
import ReactDOM  from 'react-dom';
import { useNavigate } from 'react-router-dom';



const Register = () =>{

    const register ={
 
        id:0,
        username:"",
        password:"",
        lastname:"",
        firstname:"",
        email:""

      }
     

const[username,setUsername] = useState("");
const[password,setPassword] = useState("");
const[firstname,setFirstname] = useState("");
const[lastname,setLastname] = useState("");
const[email,setEmail] = useState("");
const [error, setError] = useState("");
  const navigate = useNavigate();


 
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
 
    try {
      const response = await axios.post("http://localhost:5000/auth", {username, password,firstname,lastname,email});
      if(response.status === 202) {
        console.log("Registration Complete");
 
        register.id = response.data.id;
        register.username = response.data.username;
        register.password = response.data.password;
        register.firstname = response.data.firstname;
        register.lastname= response.data.lastname;
        register.email = response.data.email;
        
     }
    }   catch (error) { if(error instanceof Error){
         const err = error as Error;
         setError("Registration not complete please try again");
      }
 
    }
  }



return(
    <div className="Register">
        {error && <p className="error-message">{error}</p>}
        <div className='register-container'>
            <h2>Register Here</h2>
    
    <form onSubmit={handleSubmit}>
        <div className='labels'>
        <input
             value={username}  
             type ="username" 
             placeholder='Username'
             onChange={(e)=> setUsername(e.target.value)}/>

        </div>

        <div className='labels'>
        <input
             value={password}  
             type ="password" 
             placeholder='Password'
             onChange={(e)=> setPassword(e.target.value)}/>

        </div>

        <div className='labels'>
        <input
             value={firstname}  
             type ="firstname" 
             placeholder='Firstname'
             onChange={(e)=> setFirstname(e.target.value)}/>

        </div>

        <div className='labels'>
        <input
             value={lastname}  
             type ="lastname" 
             placeholder='Lastname'
             onChange={(e)=> setLastname(e.target.value)}/>

        </div>

        <div className='labels'>
        <input
             value={email}  
             type ="email" 
             placeholder='Email'
             onChange={(e)=> setEmail(e.target.value)}/>

        </div>

           <button className='reg-button'>Register</button>
    </form>
   
    <button onClick={() => navigate('/dashboard')}>Home</button>
        </div>
        
      

    </div>
)

    }


export default Register
