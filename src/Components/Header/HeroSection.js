import heroimage from '../../assets/heroimage.jpg';

function HeroSection() {
    return (
        <section className='heroSection' id="heroS">

        <div className="heroContent">
            <div className="heroLeft">
                <div className='heroTitle'><h1>Little Lemon</h1></div>
                <div className='heroCity'><h2>Chicago</h2></div>
                <div className='heroDescription'><p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p></div>
                <div className='heroButton'><button>Reserve a Table</button></div>
            </div>

            <div className="heroRight">
                <div className='heroImage'><img src = {heroimage} width = "400px" alt="Little Lemon Restaurant" /></div>
            </div>
        </div>

        </section>
    );
}

export default HeroSection;


