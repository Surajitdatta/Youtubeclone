import React from 'react'
import "./login.css"
import { useDispatch } from 'react-redux';
import { addEmail } from '../Redux/emailSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Login() {
    const [em , setEm] = useState("")
    const getEmail = useSelector((store)=>store.userEmail.email)
    // console.log("len",getEmail.length)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const emailHandler=(email)=>{
        email.preventDefault()
        dispatch(addEmail(em))
         navigate("/home")
        // // navigate('/');
        // console.log("len",getEmail.length)
    }
    return (
      <div className="login" >
        <div className="login-container">
          <div className="logo">
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Logo" width="120" />
          </div>
          <form onSubmit={emailHandler}>
            <input type="email" className="input-field" placeholder="Email" value ={em} onChange={(e)=>setEm(e.target.value)} required />
            <input type="password" className="input-field" placeholder="Password" />
            <button type="submit" className="login-button" >Login</button>
          </form>
          <div className="footer">
            Don't have an account? <a href="#">Sign up</a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;