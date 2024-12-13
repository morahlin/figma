import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Login.css';
const Login = () => {
  return (
    <div className='container1 flex1'>
      <div className='facebook-page flex1'>

        <div className='text'>
          <h1>Figma Design </h1>
          <p> Connect with friends and the world </p>
          <p> around you on Figma Design </p>
        </div>

        <form>
          <input type='email' placeholder='enter your email' required  className='text-black'/>
          <input type='password' placeholder='enter your password' required  className='text-black'/>

          <div className='link'>
            <button type='submit' className='login'>Login</button>
            <Link to={'#'} className='forgot'> Forgot password</Link>
          </div>
          <hr />

          <div className='button'>
            <Link to={'/Register'}>Create new account</Link>
          </div>

        </form>

      </div>
    </div>
  )
}

export default Login;
