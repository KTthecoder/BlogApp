import svg from '../../Assets/Svg/undraw_online_stats_0g94.svg'
import { Link } from 'react-router-dom'
import '../SignIn/SignIn.css'

function SignIn() {
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
            <form className='FormInputsDiv'>
                <input type="text" className="FormInp" id='FormEmail' placeholder='Email' />
                <input type="text" className="FormInp" id='FormPassword' placeholder='Password' />
                <div className='FormBtnsDiv'>
                  <button type='submit' className='FormBtn'>Login</button>
                  <p>New User? <Link to="/register" className='FormLink'>Sign Up</Link></p>
                </div>
            </form>
          </div>
      </div>
    );
  }
  
export default SignIn;