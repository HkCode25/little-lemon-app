import { useState } from 'react';


export default function Menu() { 
 const [fristname, setFirstName] = useState("");
 
   const handleSubmit = (e) => {
     e.preventDefault();
     setFirstName("");
     console.log("Form submitted");
     alert(`Hello, ${fristname}`);
   };
   
 
 return(
 
   <div className='loginForm'>
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
 

