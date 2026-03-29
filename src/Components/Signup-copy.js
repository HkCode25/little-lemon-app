import React, { useState } from 'react';
import "./Login.css";
import emailIcon from '../assets/icons_assets/New Folder With Items/emailIcon.png';
import lockIcon from '../assets/icons_assets/New Folder With Items/lockIcon.png';
import nameIcon from '../assets/icons_assets/New Folder With Items/nameIcon.png'; 


function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [action, setAction] = useState("Login");



   const handleSubmit = (e) => {
     e.preventDefault();
     setFirstname("");
     setLastName("");
     setEmail("");
     setPassword("");
     console.log("Form submitted");
     alert(`Hello, ${firstname}`);
   };



return(

  <div className='loginForm'>

    <div className="signup">{action}</div>

    <form onSubmit={handleSubmit}>
       <fieldset>
        <div className='firstName'>
          <img src={nameIcon} alt="name icon" width="30rem"/>
           <label htmlFor="firstName">First Name</label><br />
           <input 
             id="firstName"
             type="text" 
             placeholder='First Name' 
             name='firstname' 
             value={firstname} 
             onChange={(e) => setFirstname(e.target.value)}
           />
         </div>
          <div className='lastName'>
           <img src={nameIcon} alt="name icon" width="30rem"/>
           <label htmlFor="lastName">Last Name</label><br />
           <input 
             id="lastName"
             type="text" 
             placeholder='Last Name' 
             name='lastname' 
             value={lastname} 
             onChange={(e) => setLastName(e.target.value)}
           />
         </div>
         <div className='email'>
          <img src={emailIcon} alt="email icon" width="30rem"/>
           <label htmlFor="email">Email</label><br />
           <input 
             id="email"
             type="email" 
             placeholder='Email' 
             name='email' 
             value={email} 
             onChange={(e) => setEmail(e.target.value)}
           />
         </div>
         <div className='signup-password'>
          <img src={lockIcon} alt="password icon" width="30rem"/>
           <label htmlFor="password">Password</label><br />
           <input 
             id="password"
             type="password" 
             placeholder='Password' 
             name='password' 
             value={password} 
             onChange={(e) => setPassword(e.target.value)}
           />
         </div>
         <div className='forgot-password'>Forgot password? <span>Click here!</span></div>
         
         <div className="submit-container">

          <button className={action==="Login"?"submit gray":"submit"}
          onClick={()=>{setAction("Sign Up")}} 
          disabled={!firstname} 
          type='submit'>
          Sign Up
          </button>

          <button className={action==="Sign Up"?"submit gray":"submit"} 
          onClick={()=>{setAction("Login")}} 
          disabled={!email} 
          type='submit'>
          Login
          </button>

         </div>
         
       </fieldset>
    </form>

  </div>

);
}


export default Signup;