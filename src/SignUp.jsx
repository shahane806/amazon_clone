import React, { useEffect, useState } from 'react'
import './SignUp.css'
import { useNavigate } from "react-router-dom";

import { Link, redirect } from "react-router-dom";
import {auth} from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useStateValue } from './StateProvider';
function SignUp() {
  const navigate = useNavigate();
  const [email,setemail] = useState('');
  const [password,setpassword]=useState('');

    const register = (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        // Signed in 
       
         navigate("/index");
        // ...
      })
      .catch((error) => {
      
      alert(error.message);
      });
    }

  return (

    <div className='signup'>
    <div className='signupblock'>
        <Link to="/">
        <img className="AmazonLogoSignUp" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'>
        </img>
       
        </Link>
         <div className='formInputs'>
        <form onSubmit={register}>
        <div className='inputs'>

     
        </div>
        <div className='inputs'>
            <input  name="email" autoComplete="abc123@gmail.com" className='signUpInputs' type="email" onChange={(e)=>setemail(e.target.value)} placeholder='abc123@gmail.com'/>
        </div>
      
        <div className='inputs'>

        <input 
        className='signUpInputs'
        autoComplete='password'
        placeholder="Password" onChange={(e)=>setpassword(e.target.value)} type="password"/>
        </div>
        <button type='submit' onClick={register}>
            Sign Up
        </button>
        </form>
        </div>
    </div>

</div>
  )
}

export default SignUp