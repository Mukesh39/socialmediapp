import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='login'>
    <div className="loginWrapper">

       <div className="loginLeft">
      
       <h1>
      <span class="word">Mukesh<span class="superscript">s</span> </span>
       <span class="word">Social</span>
      </h1>
       <span className="loginDesc">Connect with friends On Mukesh Social </span>
       </div>

       <div className="loginRight">
       
       <div className="logingBox">
       <input placeholder='Email' type="text" className="loginInput" />
       <input  placeholder='Password' type="text" className="loginInput" />
       <Link to ="/Home" ><button className="loginButton">Login</button></Link>
       <span className="loginForgot">Forgot Password </span>
       <Link to='/Register'> <button className="loginRegisterButton">Create a New Account </button> </Link> 

       
       </div>
       </div>
    </div>
    
    
    
    </div>
  )
}
