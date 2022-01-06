import "./CreateAccount.css";
import axios from 'axios';
import { useState} from 'react';
import { Link } from 'react-router-dom';

export default function CreateAccount() {
  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[nickname,setNickname] = useState('');
  const[password,setPassword] = useState('');
  const[passwordConfirmation,setPasswordConfirmation] = useState('');
  
  const handleSubmit = event =>{
    event.preventDefault();

    const user ={
      name: name,
      email:email,
      nickname:nickname,
      password:password,
      passwordConfirmation:passwordConfirmation
    }
    axios.post('user/register', user)
    .then(response => console.log(response))
  }

  return (
    <div className="center-CreateAccount">
      <main className="createAccountContainer">
        <h2>Create an account</h2>
        <form action="">

          <div className="input-field-CreateAcc">
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Enter your full name"
              required onChange={event => setName(event.target.value)}/>
          </div>
          
          <div className="input-field-CreateAcc">
            <input
              type="text"
              name="nickname"
              id="nickname"
              placeholder="Enter your nickname"
              required onChange={event => setNickname(event.target.value)}/>
          </div>
          <div className="input-field-CreateAcc">
            <input
              type="email"
              name="e-mail"
              id="e-mail"
              placeholder="Enter your E-mail"
              required onChange={event => setEmail(event.target.value)}/>
          </div>
          Password
          <div className="input-field-CreateAcc">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
              required onChange={event => setPassword(event.target.value)}/>
          </div>
          <div className="passwordRecoveryText">
            Must be at least 8 charaters.
          </div>
          Password Confirmation
          <div className="input-field-CreateAcc">
            <input
              type="password"
              name="passwordConfirmation"
              id="passwordConfirmation"
              placeholder="Corfim the Password"
              required onChange={event => setPasswordConfirmation(event.target.value)}/>
          </div>
          <div className="passwordRecoveryText"> 
          Both passwords mustmach.
          </div>

          <div className="checkbox-agree">
            <input type='checkbox'required />
            &nbsp; I agree to the terms of the and conditions of the{" "}
            <a
              className="termsAndConditions"
              href="/termsAndConditions"
              id="to-termsAndConditions"
              aria-label="termsAndConditions"
            >
              MetaStore Subscriber Agreement?
            </a>
          </div>
          
          <Link to='/myaccount'>
              <button className="save" type="submit">Continue</button>
            </Link>
          
        </form>
      </main>
    </div>
  );
}
