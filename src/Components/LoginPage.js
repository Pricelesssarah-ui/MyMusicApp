import React from "react";
import "./LoginPage.css";
import Logo from "../assets/images/svgs/logo.svg";
import { loginUrl } from '../Components/spotify';

function LoginPage() {
  return (
    <div className="login">
        <div className="logo">
            <img src={Logo} height={100} alt="logo" />
        </div>
        <a href={loginUrl}>
            LOGIN WITH SPOTIFY
        </a>
    </div>
  );
}

export default LoginPage;
