import React, { useState } from 'react';


export default function Menu() { 
 const [fristname, setFirstName] = useState("");
 const[count, setCount] = useState(0);

function increment() {
  setCount(prevCount => prevCount + 1);
}

function decrement() {
  setCount(prevCount => prevCount - 1);
}


   const handleSubmit = (e) => {
     e.preventDefault();
     setFirstName("");
     console.log("Form submitted");
     alert(`Hello, ${fristname}`);
   };


 return(

   <div className='loginForm'>

    <div className='counter'>
      <h3>Menu</h3>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  

     <form onSubmit={handleSubmit}>
       <fieldset>
         <div className='firstName'>
           <label htmlFor="firstName">First Name</label><br />
           <input 
             id="firstName"
             type="text" 
             placeholder='First Name' 
             name='fristname' 
             value={fristname} 
             onChange={(e) => setFirstName(e.target.value)}
           />
         </div>
         <button disabled={!fristname} type='submit'>Sign Up</button>
       </fieldset>
     </form>
 
   </div>
 
 );
 }
 

