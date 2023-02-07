import React, { useState } from 'react'
import './SignIn.css'
import { Link } from "react-router-dom";
function SignIn() {
  const[username,setusername]=useState(true);
  const[password,setpassword]=useState(true);
  console.log(username,password)
  return (
    <div className='signin'>
        <div className='signinblock'>
            <Link to="/">
            <img className="AmazonLogoSignIn" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'>
            </img>
           
            </Link>
             <div className='formInputs'>
            <form>
            <div className='inputs'>

            <input 
            className='signInInputs'
            onChange={(e)=>setusername(e.target.value)}
            placeholder="Username" type="text" autoComplete='username'/>
            </div>
            <div className='inputs'>

            <input 
            className='signInInputs'
            onChange={(e)=>setpassword(e.target.value)}
            placeholder="Password" type="password" autoComplete='current-password'/>
            </div>
            <button type='submit'>
                Login
            </button>
            </form>
            </div>
            <div>
              
            <div className='create__account'>
                <h6>Don't have account ,</h6>
                <Link className="signuplink" to="/signUp">
                <h6>Create Account?</h6> </Link>
                
            </div>
            </div>
        </div>

    </div>
  )
}

export default SignIn