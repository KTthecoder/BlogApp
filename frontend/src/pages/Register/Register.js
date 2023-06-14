import svg from '../../Assets/Svg/undraw_online_stats_0g94.svg'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import '../Register/Register.css'
import { useState, useEffect } from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';

function Register() {
    const navigate  = useNavigate()
    const location = useLocation();
    const [show, setShow] = useState(false)
    const [userToken, setUserToken] = useState()

    function getToken() {
      const token = localStorage.getItem('token');
      setUserToken(token)
    }

    useEffect(() => {
        getToken()
    }, [])
    
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

    return (
      <>
      {userToken ? (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh'}}>
          <h1 style={{textAlign: 'center', padding: '0px 15px 0px 15px'}}>You are already sign in</h1>
        </div>
        ) : (
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
                    navigate("/sign-in")
                  })
                  .catch(error => {
                    setShow(true)
                    navigate("/register",{state :{ message : "Username or Email is already taken!"}})
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
            </div>
        </div>
        )}
      </>
    );
}
  
export default Register;