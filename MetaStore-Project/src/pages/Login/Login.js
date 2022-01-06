import "./Login.css";
import axios from "axios";
import React, { useState } from "react";

export default function Login() {

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = event => {
    event.preventDefault()
    const login={
      
      email:email,
      password:password
     
    }
    axios.post('auth/login', login)
    .then(response => {
      const token = response.token
      localStorage.setItem('token',token)
    });
  }


  return (
    <div className="center">
      <main className="loginContainer">
        <h2>Login</h2>
        <form className="login-form" 
          onSubmit={handleSubmit}
          
        >
          <div className="input-field">
            <input
              type="email"
              placeholder="email@example.com"
              name="userEmail"
              id="userEmail"
              required onChange={event => setEmail(event.target.value)} />            
          </div>
         
          <div className="input-field">
            <input
              type="password"
              placeholder="Your secret password"
              name="userPassword"
              id="userPassword"
              required onChange={event => setPassword(event.target.value)}
              
            />
          </div>
          
          <div className="checkbox-keep-conected">
            <input type="checkbox" />
            &nbsp;Keep Conected?
          </div>

          <input type="submit" value="Continue" />

          <div className="passwordRecovery">
            <a
              className="passwordRecoverylink"
              href="/passwordRecovery"
              id="to-passwordRecovery"
              aria-label="password-recovery"
            >
              Forgot your password?
            </a>
          </div>

          <div className="createAccountText">
            Not a member? It's free and easy to use.
          </div>
          <a
            className="signUplink"
            href="/createAccount"
            id="to-register"
            aria-label="create-an-account"
          >
            Sign-Up
          </a>
        </form>
      </main>
    </div>
  );
}


