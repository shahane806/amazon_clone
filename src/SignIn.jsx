import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css'
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import { signInWithEmailAndPassword } from 'firebase/auth';
function SignIn() {
  const[{user},dispatch] = useStateValue();
  const[email,setemail] = useState('');
  const[password,setpassword] = useState('');
  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault();
  signInWithEmailAndPassword(auth,email, password)
  .then((userCredential) => {
    // Signed in 
    
    navigate("/index");
    dispatch({
      type:"ADDUSER",
      user:userCredential.user,
    });
    // ...
  })
  .catch((error) => {
  
    alert(error.message);
  });
  }

  

      return (
        
        <div className='signin'>
        <div className='signinblock'>
            <Link to="/">
            <img className="AmazonLogoSignIn" alt = "" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'>
            </img>
           
            </Link>
             <div className='formInputs'>
            <form onSubmit={signIn}>
            <div className='inputs'>

            <input 
            className='signInInputs'
            onChange={(e)=>setemail(e.target.value)}
            placeholder="abc@gmail.com" type="email" autoComplete='email'/>
            </div>
            <div className='inputs'>

            <input 
            className='signInInputs'
            onChange={(e)=>setpassword(e.target.value)}
            placeholder="Password" type="password" autoComplete='current-password'/>
            </div>
            <button type='submit' onClick={signIn}>
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