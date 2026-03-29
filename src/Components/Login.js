import React, { useState } from 'react';
import "./Login.css";
import emailIcon from '../assets/icons_assets/New Folder With Items/emailIcon.png';
import lockIcon from '../assets/icons_assets/New Folder With Items/lockIcon.png';
/* import nameIcon from '../assets/icons_assets/New Folder With Items/nameIcon.png';  */
/* import Signup from './Signup'; */
import { Signup } from './Signup';
import { Login2 } from './Login2';


function Login() {
const [currentForm, setCurrentForm] = useState('login');

const toggleForm = (formName) => {
  setCurrentForm(formName);
}

return(

  <div className='loginForm'>
    {currentForm === "login" ? <Login2 onFormSwitch={toggleForm}/> : <Signup onFormSwitch={toggleForm}/>}
  </div>

);
}

export default Login;