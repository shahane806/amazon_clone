import React from 'react'
import './SignUp.css'
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className='signup'>
    <div className='signupblock'>
        <Link to="/">
        <img className="AmazonLogoSignUp" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'>
        </img>
       
        </Link>
         <div className='formInputs'>
        <form>
        <div className='inputs'>

        <input 
        className='signUpInputs'
        autoComplete='username'
        placeholder="Username" type="text"/>
        </div>
        <div className='inputs'>
            <input  autoComplete="abc123@gmail.com" className='signUpInputs' type="email" placeholder='abc123@gmail.com'/>
        </div>
        <div className='inputs'>

        <input 
        className='signUpInputs'
        autoComplete='password'
        placeholder="Password" type="password"/>
        </div>
        <button type='submit'>
            Sign Up
        </button>
        </form>
        </div>
    </div>

</div>
  )
}

export default SignUp