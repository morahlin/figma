import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Register.css';
const Register = () => {
  return (
    <div className='container1 flex1'>
      <div className='facebook-page flex1'>

         <div className='text'>
            <h1> Create new account </h1>
            <p> Connect with friends and the world </p>
            <p> around you on Figma Design </p>
         </div>
         <form>
            <input type='text' placeholder='enter your username' required />
            <input type='email' placeholder='enter your email' required />
            <input type='password' placeholder='enter your password' required />
            <input type='password' placeholder='confirm your password' required />
            <div className='link'>
                <button type='submit' className='login'>Register</button>
            </div>
            <hr/>
            <div className='button'>
                <Link to={'/login'}>sign-up</Link>

            </div>
          

         </form>

      </div>
    </div>
  )
}

export default Register
