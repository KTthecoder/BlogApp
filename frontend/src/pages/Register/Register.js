import svg from '../../Assets/Svg/undraw_online_stats_0g94.svg'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import '../Register/Register.css'
import { useState } from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';

function Register() {
    // const [username, setUsername] = useState()
    // const [password, setPassword] = useState()
    // const [email, setEmail] = useState()
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
      username: yup.string().required("Username is required").min(5, "Username is too short").max(30, "Username is too long"),
      email: yup.string().email().required("Email is required"),
      password: yup.string().required("Password is required").min(6, "Password is too short")
    })

    // const onSubmit = (event) => {
    //   const csrftoken = getCookie('csrftoken');
    //   fetch('http://127.0.0.1:8000/api/register', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'X-CSRFToken': csrftoken,
    //         'Accept': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       username: username,
    //       password: password,
    //       email: email
    //     }) 
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     navigate("/")
    //   })
    //   .catch(error => {
    //     setShow(true)
    //     navigate("/register",{state :{ message : "Username or Email is already taken!"}})
    //   })
    //   event.preventDefault();
    // }

    return (
        <div className="FormContainer">
          <div className="PhotoDiv">
            <img src={svg} className="FromImg" alt='People' />
          </div>
          <div className='FormDiv'>
            <div className='FormHeaderDiv'>
                <h1>Create Account!</h1>
                <p>Please enter your information</p>
            </div>
            <Formik
              initialValues={{ username: '', email: '', password: '' }}
              validationSchema={schema}
              onSubmit={(values) => {
                const csrftoken = getCookie('csrftoken');
                fetch('http://127.0.0.1:8000/api/register', {
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
                  // if(data['response'] == "User created Succesfully"){
                  //   navigate("/")
                  // }
                  alert(data['response'])
                  navigate("/sign-in")
                })
                .catch(error => {
                  setShow(true)
                  navigate("/register",{state :{ message : "Username or Email is already taken!"}})
                  console.log("Username or email is already taken", error)
                })
              }}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit} className='FormInputsDiv'>
                  {props.errors.username && props.touched.username && props.errors.username}
                  <input
                    type="text"
                    name="username"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.username}
                    className="FormInp"
                    placeholder='Username'
                  />
                  {props.errors.email && props.touched.email && props.errors.email}
                  <input
                    type="email"
                    name="email"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.email}
                    className="FormInp"
                    placeholder='Email'
                  />
                  {props.errors.password && props.touched.password && props.errors.password}
                  <input
                    type="password"
                    name="password"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.password}
                    className="FormInp"
                    placeholder='Passoword'
                  />
                  {show && <p className='ErrorMessage'>{location.state.message}</p>}
                  <div className='FormBtnsDiv'>
                    <button type='submit' className='FormBtn'>Sign Up</button>
                    <p>Already have an Account? <Link to="/sign-in" className='FormLink'>Sign In</Link></p>
                  </div>
                </form>
              )}
            </Formik>
            {/* <form className='FormInputsDiv' onSubmit={onSubmit}>
                <input type="text" className="FormInp" id='FormUsername' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value) }/>
                <input type="text" className="FormInp" id='FormEmail' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value) }/>
                <input type="text" className="FormInp" id='FormPassword' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value) }/>
                {show && <p className='ErrorMessage'>{location.state.message}</p>}
                <div className='FormBtnsDiv'>
                  <button type='submit' className='FormBtn'>Sign Up</button>
                  <p>Already have an Account? <Link to="/sign-in" className='FormLink'>Sign In</Link></p>
                </div>
            </form>  */}
          </div>
      </div>
    );
}
  
export default Register;