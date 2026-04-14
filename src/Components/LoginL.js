import React, { useState } from 'react';
import "./Login.css";
import emailIcon from '../assets/icons_assets/New Folder With Items/emailIcon.png';
import lockIcon from '../assets/icons_assets/New Folder With Items/lockIcon.png';


export const LoginL = (props) =>{
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errors, setErrors] = useState({});



const validate = () => {
  const newErrors = {};
  if (!email) newErrors.email = "Please enter a valid email.";
  if (!password) newErrors.password = "Please enter a password.";
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};


   const handleSubmit = (e) => {
     e.preventDefault();
     setEmail("");
     setPassword("");
     if (!validate()) return; // Stop submission if invalid
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
           {errors.email && <p className="error">{errors.email}</p>}
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
            {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div className='forgot-password'>Forgot password? <span>Click here!</span></div>
      <div className="submit-container">
          <button
/*          disabled={!password || !email}
 */         type='submit'
/*             onSubmit={handleSubmit}
 */          >Login
          </button>
      </div>
    </form>

        <button className='switchform-btn' 
          onClick={() => props.onFormSwitch('signup')}
/*           disabled={!password || !email}
 */          type='button'>
          Don't have an account? Sign Up!
        </button>
    
    </div>
  );
}
