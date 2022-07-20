import { Link } from 'react-router-dom'
import '../GlobalComponents/Footer.css'

function Footer() {
    return (
        <div className="FooterContainer">
            <div className="ListsDiv">
                <div className="List">
                    <div className="ListHeader">
                        <h2>Quick Links</h2>
                    </div>
                    <ul className="ListList">
                        <li><Link to="/" className="ListHref">Home</Link></li>
                        <li><Link to="/about" className="ListHref">About</Link></li>
                        <li><Link to="/contact" className="ListHref">Contact Us</Link></li>
                        <li><Link to="/sign-in" className="ListHref">Sign In</Link></li>
                        <li><Link to="/privacy-policy" className="ListHref">Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className="List">
                    <div className="ListHeader">
                        <h2>Socials</h2>
                    </div>
                    <ul className="ListList">
                        <li><a href="https://www.google.com/" className="ListHref">Facebook</a></li>
                        <li><a href="https://www.google.com/" className="ListHref">Instagram</a></li>
                        <li><a href="https://www.google.com/" className="ListHref">Twitter</a></li>
                        <li><a href="https://www.google.com/" className="ListHref">Pinterest</a></li>
                        <li><a href="https://www.google.com/" className="ListHref">TikTok</a></li>
                    </ul>
                </div>
            </div>
            <div className='NewsletterDiv'>
                <div className='NewsletterHeader'>
                    <h2>Newsletter</h2>
                </div>
                <div className='NewsletterP'>
                    <p>Donec tempus arcu vel nisl feugiat gravida. Vestibulum nec ipsum luctus ipsum molestie vestibulum. Curabitur vel sapien feugiat, convallis ante sed, ornare elit. Integer accumsan, enim ac fermentum ultricies, justo mauris maximus massa, vel ornare elit lectus ut tortor. Sed sit amet urna nisl.</p>
                </div>
                <div className='NewsletterFormDiv'>
                    <input type="text" placeholder="Email Adress" className='NewsletterInput' />
                    <div className='NewsletterBtn'>SEND</div>
                </div>
            </div>
            <div className='ProjectInfoDiv'>
                <p>&copy; Blog App created by Ksawery Tkaczyk 2022</p>
            </div>
        </div>
    );
}

export default Footer;
