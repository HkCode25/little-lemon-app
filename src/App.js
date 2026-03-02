import './App.css';
import logo from './assets/logo.png';

function App() {
  return (
    <> 
<header className='App-header'>
  <img className="logo" src = {logo} width = "200px" alt="Little Lemon Logo" />

<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#menu">Menu</a></li>
    <li><a href="#reservations">Reservations</a></li>
    <li><a href="#order-online">Order online</a></li>
    <li><a href="#login">Login</a></li>
  </ul>
</nav>

</header>


<main className='App-main'>
  <article>
    <div>Reserve a table at Little Lemon Restaurant</div>
  </article> 

  <article>
    <div>This week's specials!</div>
  </article>

  <article>
    <div>Testimonials for Little Lemon Restaurant</div>
  </article>

  <article>
    <div>About section for Little Lemon Restaurant</div>
  </article>

</main> 


<footer className='App-footer'>
  <img className="logo" src = {logo} width = "200px" alt="Little Lemon Logo" />
  <nav> 
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#menu">Menu</a></li>
      <li><a href="#reservations">Reservations</a></li>
      <li><a href="#order-online">Order online</a></li>
      <li><a href="#login">Login</a></li>
    </ul>
  </nav>
  <div>Copyright © 2026 Little Lemon Restaurant</div>
</footer>
      
  </>
  );
}

export default App;
