import './App.css';
import logo from './assets/logo.png';
import Header from './Components/Header';
import MainApp from './Components/Main';
import { Link } from "react-router-dom";


function App() {
  return (
    <> 
      
        <Header />
        <MainApp />  


<footer className='App-footer'>
  
    <Link to="/">
      <img className='footerLogo' src = {logo} width = "200px" alt="Little Lemon Logo" />
    </Link>


    <ul>
      <li><Link to="/" className="nav-item">Home</Link></li>
      <li><Link to="/About" className="nav-item">About</Link></li>
      <li><Link to="/Menu" className="nav-item">Menu</Link></li>
      <li><Link to="/Reservations" className="nav-item">Reservations</Link></li>
      <li><Link to="/OrderOnline" className="nav-item">Order online</Link></li>
      <li><Link to="/Login" className="nav-item">Login</Link></li>
    </ul>

    <div>
    <p>Copyright © 2026 Little Lemon Restaurant</p>
    </div>

</footer>
      
  </>
  );
}

export default App;
