import '../Contact/Contact.css'
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Contact() {
    const navigate  = useNavigate()
    const location = useLocation();
    const [show, setShow] = useState(false)
    
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    let schema = yup.object().shape({
        name: yup.string().required("Name is required").min(0, "Name is too short").max(40, "Name is too long"),
        email: yup.string().email().required("Email is required"),
        message: yup.string().required("Message is required").min(0, "Message is too short").max(300, "Message is to long")
    })

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
                <Formik
                    initialValues={{name: '', email: '', message: ''}}
                    validationSchema={schema}
                    onSubmit={(values) => {
                        const csrftoken = getCookie('csrftoken');
                        fetch('http://127.0.0.1:8000/api/message/create', {
                          method: 'POST',
                          headers: {
                              'Content-Type': 'application/json',
                              'X-CSRFToken': csrftoken,
                              'Accept': 'application/json'
                          },
                          body: JSON.stringify(values) 
                        })
                        .then(response => response.json())
                        .then(data => {
                            alert(data['response'])
                            navigate("/contact", {replace: true})
                        })
                        .catch(error => {
                            setShow(true)
                            navigate("/contact",{state :{ message : "Error while sending email"}})
                            alert("Error while sending email ", error)
                        })
                      }}
                >
                    {(props) => (
                    <form onSubmit={props.handleSubmit} className='ContactForm'>
                        {props.errors.name && props.touched.name && props.errors.name}
                        <input
                            type="text"
                            name="name"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.username}
                            className="ContactInp"
                            placeholder='Your name'
                        />
                        {props.errors.email && props.touched.email && props.errors.email}
                        <input
                            type="email"
                            name="email"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.email}
                            className="ContactInp"
                            placeholder='Your email'
                        />
                        {props.errors.message && props.touched.email && props.errors.message}
                        <textarea 
                            rows="4" 
                            cols="50" 
                            type="text"
                            name="message"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.password}
                            className="ContactInp"
                            placeholder='Message'
                        ></textarea>
                        {show && <p className='ErrorMessage'>{location.state.message}</p>}
                        <button className='ContactBtn' id='ContactBtn' type='submit' style={{cursor: 'pointer'}}>SUBMIT</button>
                    </form>
                )}
                </Formik>
            </div>
        </div>
    );
}

export default Contact;
