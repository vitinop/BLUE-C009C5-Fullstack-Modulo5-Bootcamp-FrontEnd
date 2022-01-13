import "./Login.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authLogin from "../../api/authLogin";
export default function Login() {

  const [ email, setEmail ] = useState("")   
  const [ password, setPassword ] = useState("")
  const [ user, setUser] = useState("");
  const navigate = useNavigate();

  
  const clearInput = () => {
    setEmail("")
    setPassword("")
  }

  const getDada = (event) => {
    event.preventDefault();
    
    const data = {
      email: email,
      password: password
    }
    
    authLogin.authenticate(data)
    .then( (res) => {
      setUser(res.data)
    })
    .catch( (err) => {
      alert('Incorrect username or password')
    })
   
    clearInput()

  }


  useEffect( () => {
    if(user) {
      authLogin.saveDataUser(user)
      navigate('/profile')

    }
  }, [navigate, user])
  


  return (
    <div className="center">
      <main className="loginContainer">
        <h2>Login</h2>
        <form className="login-form" onSubmit={getDada}>
          <div className="input-field">
            <input
              type="email"
              placeholder="Type your email@example.com"
              name="userEmail"
              id="userEmail"
              required
              value={email}
              onChange={ event => setEmail(event.target.value)}
            />
          </div>

          <div className="input-field">
            <input
              type="password"
              placeholder="Your secret password"
              name="userPassword"
              id="userPassword"
              required
              value={password}
              onChange={ event => setPassword(event.target.value)}
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
