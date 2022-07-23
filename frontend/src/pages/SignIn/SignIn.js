import svg from '../../Assets/Svg/undraw_online_stats_0g94.svg'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import '../SignIn/SignIn.css'
import { Formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react'

function SignIn({props}) {
    const navigate  = useNavigate()
    const [show, setShow] = useState(false)
    // const userToken = props.setToken

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
      username: yup.string().required("Username is required"),
      password: yup.string().required("Password is required").min(6, "Password is too short")
    })

    return (
      <div className="FormContainer">
          <div className="PhotoDiv">
            <img src={svg} className="FromImg" alt='People' />
          </div>
          <div className='FormDiv'>
            <div className='FormHeaderDiv'>
                <h1>Welcome Back!</h1>
                <p>Login to continue</p>
            </div>
            <Formik
              initialValues={{ username: '', password: '' }}
              validationSchema={schema}
              onSubmit={(values) => {
                const csrftoken = getCookie('csrftoken');
                fetch('http://127.0.0.1:8000/api/login', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      'X-CSRFToken': csrftoken,
                      'Accept': 'application/json'
                  },
                  body: JSON.stringify(values) 
                })
                .then(response => {
                  if(!response.ok){
                    setShow(true)
                  }     
                  return response.json()
                })
                .then(data => {
                  localStorage.setItem('token', data['token'])
                  navigate("/")
                })
                .catch(error => {
                  setShow(true)
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
                  {show && <p className='ErrorMessage'>Username or password is invalid</p>}
                  <div className='FormBtnsDiv'>
                    <button type='submit' className='FormBtn'>Login</button>
                    <p>New User? <Link to="/register" className='FormLink'>Sign Up</Link></p>
                  </div>
                </form>
              )}
            </Formik>
            {/* <form className='FormInputsDiv'>
                <input type="text" className="FormInp" id='FormEmail' placeholder='Email' />
                <input type="text" className="FormInp" id='FormPassword' placeholder='Password' />
                <div className='FormBtnsDiv'>
                  <button type='submit' className='FormBtn'>Login</button>
                  <p>New User? <Link to="/register" className='FormLink'>Sign Up</Link></p>
                </div>
            </form> */}
          </div>
      </div>
    );
  }
  
export default SignIn;