import heroimage from '../../assets/heroimage.jpg';

function HeroSection() {
    return (
        <section className='heroSection'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <img className='heroImage' src = {heroimage} width = "400px" alt="Little Lemon Restaurant" />
        </section>
    );
}

export default HeroSection;


