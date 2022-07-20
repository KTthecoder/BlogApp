import '../Contact/Contact.css'


function Contact() {
    return (
        <div className="ContactContainer">
            <div className="ContactHeaderDiv">
                <h1 className="ContactHeader">Contact Us</h1>
            </div>
            <div className="ContactMap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.6732888685997!2d21.000228851577486!3d52.2311532796612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8c49633d1d%3A0xaa349f21569c205!2sTower%2C%20Z%C5%82ota%2044%2C%20Z%C5%82ota%2044%2C%2000-120%20Warszawa!5e0!3m2!1spl!2spl!4v1658223622641!5m2!1spl!2spl" width="100%" height="100%" style={{border: '0px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map"></iframe>
            </div>
            <div className="ContactInfoDiv">
                <div className="ContactInfo">
                    <h2>Where to Find Us</h2>
                    <p>&#x27AA; Tower, Złota 44</p>
                    <p>&#x27AA; 00-120 Warszawa</p>
                </div>  
                <div className="ContactInfo">
                    <h2>Contact Info</h2>
                    <p>&#x27AA; contact@ktthecoder.com</p>
                    <p>&#x27AA; info@ktthecoder.com</p>
                </div>
            </div>
            <div className='ContactFormDiv'>
                <h2>Send Us Message</h2>
                <form className='ContactForm'>
                    <input type="text" placeholder='Your Name' className='ContactInp' id='NameInp'/>
                    <input type="text" placeholder='Your Email' className='ContactInp' id='EmailInp' />
                    <textarea rows="4" cols="50" placeholder='Message' className='ContactArea' id='MessageInp'></textarea>
                    <button className='ContactBtn' id='ContactBtn' type='submit'>SUBMIT</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
