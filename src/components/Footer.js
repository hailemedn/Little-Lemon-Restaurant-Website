import './styles.css'
import adrianImg from "../assets/Mario and Adrian A.jpg";
const Footer = () => {
    return (
        <footer>
            <div className="wrapper grid-container">
                <section className='footer-img'>
                    <img src={adrianImg} alt="adrian"></img>
                </section>
                <nav className='footer-nav'>
                    <h4>Navigation</h4>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservation">Reservation</a></li>
                        <li><a href="/order-online">Order online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </nav>
                <section className='contact'>
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="/address">Address</a></li>
                        <li><a href="/phone-number">Phone Number</a></li>
                        <li><a href="/email">Email</a></li>
                    </ul>
                </section>
                <section className='socials'>
                    <h4>Social-Media</h4>
                    <ul>
                        <li><a href="/address">Address</a></li>
                        <li><a href="/phone-number">Phone Number</a></li>
                        <li><a href="/email">Email</a></li>
                    </ul>
                </section>
            </div>
        </footer>
    )
}

export default Footer;

