import svg from '../../Assets/Svg/undraw_online_stats_0g94.svg'
import { Link } from 'react-router-dom'
import '../Register/Register.css'

function Register() {
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
            <form className='FormInputsDiv'>
                <input type="text" className="FormInp" id='FormEmail' placeholder='Email' />
                <input type="text" className="FormInp" id='FormPassword' placeholder='Password' />
                <input type="text" className="FormInp" id='FormPasswordRepeat' placeholder='Repeat Password' />
                <div className='FormBtnsDiv'>
                  <button type='submit' className='FormBtn'>Sign Up</button>
                  <p>Already have an Account? <Link to="/sign-in" className='FormLink'>Sign In</Link></p>
                </div>
            </form>
          </div>
      </div>
    );
}
  
export default Register;