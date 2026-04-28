import heroimage from '../../assets/heroimage.jpg';
import './heroSection.css';
import { useNavigate } from 'react-router-dom';
/* import Reservations from "./Components/Reservations";
 */
function HeroSection() {
      const navigate = useNavigate();

    return (
        <section className='heroSection' id="heroS">

        <div className="heroContent">
            <div className="heroLeft">
                <div className='heroTitle'><h1>Little Lemon</h1></div>
                <div className='heroCity'><h2>Chicago</h2></div>
                <div className='heroDescription'><p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p></div>
                <div className='heroButton'><button onClick={() => navigate('../bookingpage')}>Reserve a Table</button></div>
            </div>

            <div className="heroRight">
                <div className='heroImage'><img src = {heroimage} width = "300px" alt="" /></div>
            </div>
        </div>

        </section>
    );
}

export default HeroSection;


