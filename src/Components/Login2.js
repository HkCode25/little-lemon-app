import React, { useState } from 'react';
import "./Login.css";
import emailIcon from '../assets/icons_assets/New Folder With Items/emailIcon.png';
import lockIcon from '../assets/icons_assets/New Folder With Items/lockIcon.png';
/* import Login from './Login'; */

export const Login2 = (props) =>{
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");



   const handleSubmit = (e) => {
     e.preventDefault();
     setEmail("");
     setPassword("");
     console.log("Form submitted");
     alert(`Thank you!`);
   }


  return (
    <div className='loginForm'>

    <div className="signup">Login</div>

    <form onSubmit={handleSubmit}>
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
             placeholder='********'
             name='password'
             value={password}
             onChange={(e) => setPassword(e.target.value)}
            />
      </div>
      <div className='forgot-password'>Forgot password? <span>Click here!</span></div>
      <div className="submit-container">
          <button
          disabled={!email}
          type='submit'>
          Login
          </button>
      </div>
    </form>

        <button className='switchform-btn' 
          onClick={() => props.onFormSwitch('signup')}
          /* disabled={!email} */ 
          type='button'>
          Don't have an account? Sign Up!
        </button>
    
    </div>
  );
}
