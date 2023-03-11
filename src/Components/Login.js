import React from 'react';
import "./Login.css";
import { loginUrl } from "../spotify.js"
import Musiclogo from "../photos/logomusic.jpg";



function Login() {
  return (
    <div className='login'>
      
      <div className='login-img'>
        <img src={ Musiclogo } alt='' />
      </div>
       

        <a href={ loginUrl }><button> Login with BeeMusic </button></a>
    
  
    </div>
  )
}

export default Login
